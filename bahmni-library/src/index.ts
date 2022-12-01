export * from './code'
import {performDOMOperations} from './bahmni'

if(document.getElementById("sa-app"))
{ performDOMOperations()}