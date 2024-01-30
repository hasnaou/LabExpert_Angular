import {Patient} from "./patient.model";

export interface Echantillon {
    idEchantillon:number;
    patient:Patient;
    utilisateur:any;
    datePrelevement:string;
    typeAnalyse:string;
    Status:string;
  //private  analyses;
  //private  outilEchantillonList;
}
