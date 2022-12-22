import { ApolloQueryResult, DocumentNode, FetchResult, gql, QueryOptions } from 'apollo-boost';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

import { apolloClient } from '@/apollo';
import loaderService from '@/services/loader.service';

/**
 * Abstrakcja resource
 *
 * @export
 * @class Resource
 */
export class Resource {
  /**
   * Wykonuje zapytanie
   *
   * @param {QueryOptions} options
   * @param {string} [field]
   * @param {boolean} [preventLoader]
   * @returns {Promise<any>}
   * @memberof Resource
   */
  public query(options: QueryOptions, field?: string, preventLoader?: boolean): Promise<any> {
    options.fetchPolicy = 'network-only';
    return this.makeRequest(apolloClient.query(options), field, preventLoader);
  }


  /**
   * Transformuje obiekt na zapytanie GQL
   *
   * @param {object} toParse
   * @returns {DocumentNode}
   * @memberof Resource
   */
  public prepareOptions(toParse: object): DocumentNode {
    return gql(jsonToGraphQLQuery(toParse));
  }

  /**
   * Wykonuje zapytanie
   *
   * @private
   * @param {Promise<any>} request
   * @param {string} [field]
   * @param {boolean} [preventLoader]
   * @returns {Promise<any>}
   * @memberof Resource
   */
  private async makeRequest(request: Promise<any>, field?: string, preventLoader?: boolean): Promise<any> {
    if (!preventLoader) {
      loaderService.start();
    }
    try {
      return this.handleResponse(await request, field);
    } catch (error) {
      if (!preventLoader) {
        loaderService.end();
      }
      throw error;
    }
  }

  /**
   * Obsługuje odpowiedź
   *
   * @private
   * @param {(ApolloQueryResult<any> | FetchResult)} response
   * @param {string} [field]
   * @returns {*}
   * @memberof Resource
   */
  private handleResponse(response: ApolloQueryResult<any> | FetchResult, field?: string): any {
    loaderService.end();
    if (response.errors) {
      throw response.errors;
    }
    if (field && response.data[field] === undefined) {
      throw new Error(`Nie uzyskano odpowiedzi od serwera`);
    }
    return field && response.data ? response.data[field] : response.data;
  }
}
