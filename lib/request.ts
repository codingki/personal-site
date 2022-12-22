import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { Variables } from "graphql-request";
import { request as graphqlRequest } from "graphql-request";
import type { RequestDocument } from "graphql-request/dist/types";

const API_TOKEN = process.env.DATOCMS_API_TOKEN;

export const request = <TDocument = unknown>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) =>
  graphqlRequest<TDocument>("https://graphql.datocms.com/", document, variables, {
    Authorization: API_TOKEN || "",
    "X-Exclude-Invalid": "true",
  });
