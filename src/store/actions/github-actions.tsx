import { createAction } from '@reduxjs/toolkit'
import { GitHubUser } from '../../typings/api-typings'

const FetchGihubSucessAction = createAction<GitHubUser>('FetchGitSuccess')

const FetchGihubFailedAction = createAction<any>('FetchGitFailed')


export {FetchGihubFailedAction,FetchGihubSucessAction}