import * as d3 from 'd3';

export type HttpInitialState<T> = {
  data: T
  error: T
  isLoading: boolean
}


export type d3aseSelection = d3.Selection<any,any,any,any>;