import { useMemo } from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { graphql } from "@/gql";
import { useForm } from "react-hook-form";
import { EntityType } from "@/gql/graphql";
import { OnEntityCreation } from "@/pages";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";

const CREATE_ENTITY = graphql(/* GraphQL */ `
	mutation CreateEntity($input: CreateEntityInput) {
		createEntity(input: $input) {
			... on Contact {
				id
				name
				email
				phone
			}
			... on Company {
				id
				name
				industry
				contactEmail
			}
		}
	}
`)

type CreateEntityFormProps = {
	entityType: EntityType,
	onEntityCreation: OnEntityCreation
}

export default ({
	entityType,
	onEntityCreation,
}: CreateEntityFormProps) => {
	const [createEntity] = useMutation(CREATE_ENTITY, {
		onCompleted: (data) => onEntityCreation(data.createEntity)
	})

	const { formSchema, fieldValues }: {
		formSchema: z.ZodType,
		fieldValues: {
			name: string,
			label: string,
			placeholder?: string
		}[] | []
	} = useMemo(() => {
		switch (entityType) {
			case EntityType.Contact:
				return {
					formSchema: z.object({
						name: z.string().min(1),
						email: z.string().email("Email fomat not valid"),
						phone: z.number().nullish(),
					}),
					fieldValues: [
						{
							name: "name",
							label: "Name *",
							placeholder: "John Doe",
						},
						{
							name: "email",
							label: "Email *",
							placeholder: "johndoe@example.com",
						},
						{
							name: "phone",
							label: "Phone",
							placeholder: "432-739-0286",
						},
					]
				}

			case EntityType.Company:
				return {
					formSchema: z.object({
						name: z.string().min(1),
						contactEmail: z.string().email("Email fomat not valid"),
						industry: z.string().min(1),
					}),
					fieldValues: [
						{
							name: "name",
							label: "Name *",
							placeholder: "Sirius Cybernetics",
						},
						{
							name: "contactEmail",
							label: "Contact Email *",
							placeholder: "contact@sirius-cybernetics.com",
						},
						{
							name: "industry",
							label: "Industry *",
							placeholder: "Software developement",
						},
					]
				}

			default:
				return {
					formSchema: z.object({}),
					fieldValues: []
				}
		}
	}, [])


	const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) })
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createEntity({ variables: { input: { entityType, ...values } } })
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				{fieldValues.map((v) => (
					<FormField
						key={v.name}
						control={form.control}
						name={v.name}
						render={({ field }) => (
							<FormItem>
								<FormLabel>{v.label}</FormLabel>
								<FormControl>
									<Input placeholder={v.placeholder} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<div className="flex items-center justify-between">
					<span className="text-xs">Field with * are mandatory</span>
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</Form>
	)
}