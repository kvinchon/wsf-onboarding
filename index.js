import { queryType, stringArg, makeSchema, objectType } from "nexus";
import { GraphQLServer } from "graphql-yoga";

require('dotenv').config()

const db = require('knex')({
	client: 'pg',
	connection: process.env.DATABASE_URL
})

const stripe = require("stripe")("sk_test_oWXduLSEagWEBllB4f92iBss00VJFPEmi1");

const Product = objectType({
	name: 'Product',
	description: 'The product type',
	definition(t) {
		t.string('id', {
			nullable: true,
		}),
		t.string('name', {
			nullable: true,
		})
	}
})

const Account = objectType({
	name: 'Account',
	description: 'The account type',
	definition(t) {
		t.string('email', {
			nullable: true,
		})
		t.string('name', {
			nullable: true,
		})
	}
})

const Query = queryType({
	definition(t) {
		t.list.field("accounts", {
			type: 'Account',
			args: { name: stringArg({ nullable: true }) },
			resolve: async (parent, args) => {
				// SQL  query to select accounts
				const accounts = await db.select('email', 'name').from('accounts');
				return accounts;
			}
		});
		t.field("accountByEmail", {
			type: 'Account',
			args: {
				email: stringArg({
					nullable: false
				})
			},
			resolve: async (parent, args) => {
				const accounts = await db.select('email', 'name')
				.where({
					email: args.email
				})
				.from('accounts');

				if (!accounts || accounts.length == 0) {
					return {};
				}

				return accounts[0];
			}
		});
		t.list.field("products", {
			type: 'Product',
			resolve: async (parent, args) => {
				// API response
				const result = await stripe.products.list();

				let products = [];
				result.data.forEach((product, key) => {
					products.push({
						id: product.id,
						name: product.name,
					})
				})
				console.log(products);
				return products;
			}
		})
	},
});

const schema = makeSchema({
	types: [Query, Account, Product],
	outputs: {
		schema: __dirname + "/generated/schema.graphql",
		typegen: __dirname + "/generated/typings.ts",
	},
});

const server = new GraphQLServer({
	schema,
});

server.start(() => `Server is running on http://localhost:4000`);