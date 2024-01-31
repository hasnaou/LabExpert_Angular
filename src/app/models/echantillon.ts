import {Patient} from "./patient.model";
import {StatusEchantillon} from "../enum/status-echantillon";

export interface Echantillon {
    idEchantillon:number;
    patient:Patient;
    utilisateur:any;
    datePrelevement:Date;
    typeAnalyse:string;
    status:StatusEchantillon;
  //private  analyses;
  //private  outilEchantillonList;
}
