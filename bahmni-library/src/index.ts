export * from './code'
import { off } from 'process'
import {performDOMOperations} from './bahmni'
import { getLocationUuid, getPatientUuid } from './bahmni-patient-details'

if(document.getElementById("sa-app"))
{ performDOMOperations()}


const createScript = () => {
  const script = document.createElement('script')
  script.src='dist/speech_assistant/speech_assistant.bundle.js';
  script.setAttribute('id', 'sa-bahmni-distribution')
  script.setAttribute('patientUuid', getPatientUuid())
  script.setAttribute('locationUuid', getLocationUuid())
  document.body.appendChild(script)
  console.log('inside create script -------')
}

let patientId=getPatientUuid()
let locationId=getLocationUuid()
console.log(patientId)
console.log(locationId);
window.addEventListener('hashchange', () => {
  patientId=getPatientUuid()
  locationId=getLocationUuid()
  console.log("inside event listener")
  console.log(patientId)
  console.log(locationId)
    // script.setAttribute('patientUuid', getPatientUuid())

})
createScript()

  