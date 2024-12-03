import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { EntityType } from "@/gql/graphql";
import { OnEntityCreation } from "@/pages";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CreateEntityForm from "@/components/entity/CreateEntityForm";

type CreateEntityDialogProps = {
	onEntityCreation: OnEntityCreation
}

export default ({ onEntityCreation }: CreateEntityDialogProps) => {
	const entityTypes = Object.values(EntityType)
	const [open, setOpen] = useState(false)

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>Add entry</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add new entry</DialogTitle>
					<DialogDescription>
						Create a contact or company
					</DialogDescription>
				</DialogHeader>
				<Tabs>
					<TabsList>
						{entityTypes.map((type) => (
							<TabsTrigger key={type} value={type}>{type}</TabsTrigger>
						))}
					</TabsList>
					{entityTypes.map((type) => (
						<TabsContent key={type} value={type}>
							<CreateEntityForm
								entityType={type}
								onEntityCreation={(entity) => {
									onEntityCreation(entity)
									setOpen(false)
								}}
							/>
						</TabsContent>
					))}
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}