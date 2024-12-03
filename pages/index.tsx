import { useCallback, useEffect, useState } from "react";
import { graphql } from "@/gql";
import { AgGridReact } from "ag-grid-react";
import { useMutation, useQuery } from "@apollo/client";
import { CellEditRequestEvent, ColDef } from "ag-grid-community";
import { CreateEntityMutation, EntityType } from "@/gql/graphql";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import CreateEntityDialog from "@/components/entity/CreateEntityDialog";

const GET_ENTITIES = graphql(/* GraphQL */ `
  query GetEntities {
    getEntities {
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

const UDPATE_ENTITY = graphql(/* GraphQL */ `
  mutation UpdateEntity($input: UpdateEntityInput) {
    updateEntity(input: $input) {
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

export type Entity = CreateEntityMutation["createEntity"];
export type OnEntityCreation = (entity: Entity) => void

export default function Home() {
  const { data } = useQuery(GET_ENTITIES)
  const [updateEntity] = useMutation(UDPATE_ENTITY)

  const [rowData, setRowData] = useState<Entity[]>([]);
  const [colDefs, _] = useState<ColDef[]>([
    {
      field: "__typename",
      headerName: "Type",
    },
    {
      field: "name",
      editable: true,
    },
    {
      field: "email",
      editable: ({ data }: { data: Entity }) => data?.__typename?.toUpperCase() === EntityType.Contact,
    },
    {
      field: "phone",
      editable: ({ data }: { data: Entity }) => data?.__typename?.toUpperCase() === EntityType.Contact,
    },
    {
      field: "contactEmail",
      editable: ({ data }: { data: Entity }) => data?.__typename?.toUpperCase() === EntityType.Company,
    },
    {
      field: "industry",
      editable: ({ data }: { data: Entity }) => data?.__typename?.toUpperCase() === EntityType.Company,
    },
  ]);

  useEffect(() => {
    if (data && data.getEntities) {
      setRowData(data.getEntities)
    }
  }, [data])

  const handleEntityCreation = useCallback((entity: Entity) => {
    setRowData(prev => [...prev, entity])
  }, [])

  const handleEntityUpdate = useCallback((event: CellEditRequestEvent) => {
    const updatedField = {
      ...event.data,
      [event.colDef.field!]: event.newValue,
    } as Entity;

    setRowData(prev => [
      ...prev.filter((r) => r?.id !== updatedField?.id),
      updatedField
    ])

    updateEntity({
      variables: {
        input: {
          id: updatedField?.id ?? "",
          entityType: EntityType[updatedField?.__typename ?? "Company"],
          [event.colDef.field!]: event.newValue,
        }
      }
    })
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[1000px] flex items-center justify-between mt-10 mb-3">
        <p className="font-medium">Your list of companies and contacts</p>
        <CreateEntityDialog onEntityCreation={handleEntityCreation} />
      </div>
      <div className="ag-theme-quartz-dark w-[1000px]">
        <AgGridReact
          className="font-sans"
          rowData={rowData}
          columnDefs={colDefs}
          readOnlyEdit={true}
          domLayout={"autoHeight"}
          onCellEditRequest={handleEntityUpdate}
        />
      </div>
    </div >
  );
}
