import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
    schema: "http://localhost:4000",
    documents: ["pages/**/*.tsx", "components/**/*.tsx"],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        "./gql/": {
            preset: "client"
        }
    }
}

export default config
