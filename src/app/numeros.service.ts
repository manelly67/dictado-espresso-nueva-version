import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NumerosService {


   // inicio definir rango de los numeros
minimo:number=0;
maximo:number=0;

	min<Type>(arg:string):number{
	if (arg == 'principiante' || arg == 'principiantePT'){
	this.minimo = 0;
	}else{
	if (arg == 'intermedio' || arg == 'intermedioPT'){
	this.minimo = 101;
	}else{
	if (arg == 'intermedio-dos'){
	this.minimo = 1001;
	}else{
	if (arg == 'avanzado'){
	this.minimo = 100001;
	}else{}}}}
	return this.minimo;
	}

	max<Type>(arg:string):number{
	if (arg == 'principiante'|| arg == 'principiantePT'){
	this.maximo = 100;
	}else{
	if (arg == 'intermedio' || arg == 'intermedioPT'){
	this.maximo = 1000;
	}else{
	if (arg == 'intermedio-dos'){
	this.maximo = 100000;
	}else{
	if (arg == 'avanzado'){
	this.maximo = 999999999;
	}else{}}}}
	return this.maximo;
	}
	
  // fin definir rango de los numeros	
  
numeroGenerado:number = 0;	
	
	generarNumero(): number{                  /* genera un numero aleatorio dentro del rango definido*/
		this.numeroGenerado = Math.ceil(Math.random() * (this.maximo - this.minimo) + this.minimo);		
		return this.numeroGenerado;
	}
 
// arrays con los textos necesarios para construir la escritura en Español
				
escrituraCien:string[]= ['UNO','DOS','TRES','CUATRO','CINCO','SEIS','SIETE','OCHO','NUEVE','DIEZ','ONCE','DOCE','TRECE','CATORCE','QUINCE','DIECISÉIS','DIECISIETE',
'DIECIOCHO','DIECINUEVE','VEINTE','VEINTIUNO','VEINTIDÓS','VEINTITRÉS','VEINTICUATRO','VEINTICINCO','VEINTISÉIS','VEINTISIETE','VEINTIOCHO','VEINTINUEVE',
'TREINTA','TREINTA Y UNO','TREINTA Y DOS','TREINTA Y TRES','TREINTA Y CUATRO','TREINTA Y CINCO','TREINTA Y SEIS','TREINTA Y SIETE','TREINTA Y OCHO','TREINTA Y NUEVE',
'CUARENTA','CUARENTA Y UNO','CUARENTA Y DOS','CUARENTA Y TRES','CUARENTA Y CUATRO','CUARENTA Y CINCO','CUARENTA Y SEIS','CUARENTA Y SIETE','CUARENTA Y OCHO','CUARENTA Y NUEVE',
'CINCUENTA','CINCUENTA Y UNO','CINCUENTA Y DOS','CINCUENTA Y TRES','CINCUENTA Y CUATRO','CINCUENTA Y CINCO','CINCUENTA Y SEIS','CINCUENTA Y SIETE','CINCUENTA Y OCHO','CINCUENTA Y NUEVE',
'SESENTA','SESENTA Y UNO','SESENTA Y DOS','SESENTA Y TRES','SESENTA Y CUATRO','SESENTA Y CINCO','SESENTA Y SEIS','SESENTA Y SIETE','SESENTA Y OCHO','SESENTA Y NUEVE',
'SETENTA','SETENTA Y UNO','SETENTA Y DOS','SETENTA Y TRES','SETENTA Y CUATRO','SETENTA Y CINCO','SETENTA Y SEIS','SETENTA Y SIETE','SETENTA Y OCHO','SETENTA Y NUEVE',
'OCHENTA','OCHENTA Y UNO','OCHENTA Y DOS','OCHENTA Y TRES','OCHENTA Y CUATRO','OCHENTA Y CINCO','OCHENTA Y SEIS','OCHENTA Y SIETE','OCHENTA Y OCHO','OCHENTA Y NUEVE',
'NOVENTA','NOVENTA Y UNO','NOVENTA Y DOS','NOVENTA Y TRES','NOVENTA Y CUATRO','NOVENTA Y CINCO','NOVENTA Y SEIS','NOVENTA Y SIETE','NOVENTA Y OCHO','NOVENTA Y NUEVE',' '];

escrituraCien1:string[]= ['UN','DOS','TRES','CUATRO','CINCO','SEIS','SIETE','OCHO','NUEVE','DIEZ','ONCE','DOCE','TRECE','CATORCE','QUINCE','DIECISÉIS','DIECISIETE',
'DIECIOCHO','DIECINUEVE','VEINTE','VEINTIÚN','VEINTIDÓS','VEINTITRÉS','VEINTICUATRO','VEINTICINCO','VEINTISÉIS','VEINTISIETE','VEINTIOCHO','VEINTINUEVE',
'TREINTA','TREINTA Y UN','TREINTA Y DOS','TREINTA Y TRES','TREINTA Y CUATRO','TREINTA Y CINCO','TREINTA Y SEIS','TREINTA Y SIETE','TREINTA Y OCHO','TREINTA Y NUEVE',
'CUARENTA','CUARENTA Y UN','CUARENTA Y DOS','CUARENTA Y TRES','CUARENTA Y CUATRO','CUARENTA Y CINCO','CUARENTA Y SEIS','CUARENTA Y SIETE','CUARENTA Y OCHO','CUARENTA Y NUEVE',
'CINCUENTA','CINCUENTA Y UN','CINCUENTA Y DOS','CINCUENTA Y TRES','CINCUENTA Y CUATRO','CINCUENTA Y CINCO','CINCUENTA Y SEIS','CINCUENTA Y SIETE','CINCUENTA Y OCHO','CINCUENTA Y NUEVE',
'SESENTA','SESENTA Y UN','SESENTA Y DOS','SESENTA Y TRES','SESENTA Y CUATRO','SESENTA Y CINCO','SESENTA Y SEIS','SESENTA Y SIETE','SESENTA Y OCHO','SESENTA Y NUEVE',
'SETENTA','SETENTA Y UN','SETENTA Y DOS','SETENTA Y TRES','SETENTA Y CUATRO','SETENTA Y CINCO','SETENTA Y SEIS','SETENTA Y SIETE','SETENTA Y OCHO','SETENTA Y NUEVE',
'OCHENTA','OCHENTA Y UN','OCHENTA Y DOS','OCHENTA Y TRES','OCHENTA Y CUATRO','OCHENTA Y CINCO','OCHENTA Y SEIS','OCHENTA Y SIETE','OCHENTA Y OCHO','OCHENTA Y NUEVE',
'NOVENTA','NOVENTA Y UN','NOVENTA Y DOS','NOVENTA Y TRES','NOVENTA Y CUATRO','NOVENTA Y CINCO','NOVENTA Y SEIS','NOVENTA Y SIETE','NOVENTA Y OCHO','NOVENTA Y NUEVE',' '];

escrituraCentenas:string[] = ['CIENTO','DOSCIENTOS','TRESCIENTOS','CUATROCIENTOS','QUINIENTOS','SEISCIENTOS','SETECIENTOS','OCHOCIENTOS','NOVECIENTOS',' '];

// arrays con los textos necesarios para construir la escritura en Portugués
escrituraCienPT:string[]=['UM','DOIS','TRÊS','QUATRO','CINCO','SEIS','SETE','OITO','NOVE','DEZ','ONZE','DOZE','TREZE','CATORZE','QUINZE','DEZASSEIS','DEZASSETE',
'DEZOITO','DEZANOVE','VINTE','VINTE E UM','VINTE E DOIS','VINTE E TRÊS','VINTE E QUATRO','VINTE E CINCO','VINTE E SEIS','VINTE E SETE','VINTE E OITO','VINTE E NOVE',
'TRINTA','TRINTA E UM','TRINTA E DOIS','TRINTA E TRÊS','TRINTA E QUATRO','TRINTA E CINCO','TRINTA E SEIS','TRINTA E SETE','TRINTA E OITO','TRINTA E NOVE',
'QUARENTA','QUARENTA E UM','QUARENTA E DOIS','QUARENTA E TRÊS','QUARENTA E QUATRO','QUARENTA E CINCO','QUARENTA E SEIS','QUARENTA E SETE','QUARENTA E OITO','QUARENTA E NOVE',
'CINQUENTA','CINQUENTA E UM','CINQUENTA E DOIS','CINQUENTA E TRÊS','CINQUENTA E QUATRO','CINQUENTA E CINCO','CINQUENTA E SEIS','CINQUENTA E SETE','CINQUENTA E OITO','CINQUENTA E NOVE',
'SESSENTA','SESSENTA E UM','SESSENTA E DOIS','SESSENTA E TRÊS','SESSENTA E QUATRO','SESSENTA E CINCO','SESSENTA E SEIS','SESSENTA E SETE','SESSENTA E OITO','SESSENTA E NOVE',
'SETENTA','SETENTA E UM','SETENTA E DOIS','SETENTA E TRÊS','SETENTA E QUATRO','SETENTA E CINCO','SETENTA E SEIS','SETENTA E SETE','SETENTA E OITO','SETENTA E NOVE',
'OITENTA','OITENTA E UM','OITENTA E DOIS','OITENTA E TRÊS','OITENTA E QUATRO','OITENTA E CINCO','OITENTA E SEIS','OITENTA E SETE','OITENTA E OITO','OITENTA E NOVE',
'NOVENTA','NOVENTA E UM','NOVENTA E DOIS','NOVENTA E TRÊS','NOVENTA E QUATRO','NOVENTA E CINCO','NOVENTA E SEIS','NOVENTA E SETE','NOVENTA E OITO','NOVENTA E NOVE','CEM',' '];

escrituraCentenasPT:string[] = ['CEM','DUZENTOS','TREZENTOS','QUATROCENTOS','QUINHENTOS','SEISCENTOS','SETECENTOS','OITOCENTOS','NOVECENTOS'];

escrituraCentenasPT1:string[] = ['CENTO E','DUZENTOS E','TREZENTOS E','QUATROCENTOS E','QUINHENTOS E','SEISCENTOS E','SETECENTOS E','OITOCENTOS E','NOVECENTOS E'];


escribirNumero:string ='';
indice?:number;	
// DEFINE LA OPCION DE CAPTAR ESCRITURA A UTILIZAR

	captarEscrituraNumero<Type>(arg1:string, arg2:number):string{
	if (arg1 == 'principiante'){
		this.escribirNumero = this.captarEscrituraPrincipiante(arg2);
		}else{
	if (arg1 == 'intermedio'){
		this.escribirNumero = this.captarEscrituraIntermedio(arg2);
		}else{
	if (arg1 == 'intermedio-dos'){
		this.escribirNumero = this.captarEscrituraIntermedioDos(arg2);	
		}else{
	if (arg1 == 'avanzado'){
		this.escribirNumero = this.captarEscrituraAvanzado(arg2);
		}else{
	if (arg1 == 'principiantePT'){
		this.escribirNumero = this.captarEscrituraPrincipiantePT(arg2);
		}else{
	if (arg1 == 'intermedioPT'){
		this.escribirNumero = this.captarEscrituraIntermedioPT(arg2);			
	}}}}}}
	return this.escribirNumero;
	}

// CAPTA ESCRITURA HASTA EL NUMERO CIEN - EN ESPAñOL

	captarEscrituraPrincipiante<Type>(arg2:number):string{
	if (arg2 == 100){
		this.escribirNumero = 'CIEN';
		}else{
	if (arg2 != 100){
		this.indice = arg2-1;
		this.escribirNumero = this.escrituraCien[this.indice];
	}else{}}
	return this.escribirNumero;
	}

// CAPTA ESCRITURA HASTA EL NUMERO CIEN - EN PORTUGUéS
	
	captarEscrituraPrincipiantePT<Type>(arg2:number):string{
	if (arg2 == 100){
		this.escribirNumero = 'CEM';
		}else{
	if (arg2 != 100){
		this.indice = arg2-1;
		this.escribirNumero = this.escrituraCienPT[this.indice];
	}else{}}
	return this.escribirNumero;
	}
	

texto:string=''; a:string=''; b:string=''; b1:string=''; b2:string=''; c:string=''; aNro:number=0;
indice1?:number; indice2?:number;
textoa:string=''; textob:string='';

// CAPTA ESCRITURA HASTA EL NUMERO MIL - EN ESPAñOL

	captarEscrituraIntermedio<Type>(arg2:number):string{
	if (arg2 == 1000){
		this.escribirNumero = 'MIL';
		}else{
		this.texto= arg2.toString();
		this.a = this.texto.slice(-3,-2);
		this.b1 = this.texto.slice(-2);
		this.c = this.b1.substring(0,1);
		this.b2 = this.texto.slice(-1);
			if (this.c == '0'){
			this.b = this.b2;
			}else{
			this.b = this.b1;
			}	
		this.indice1 = Number(this.a);
		this.indice1 = this.indice1-1;
		this.indice2 = Number(this.b);
		this.indice2 = this.indice2-1;
		this.aNro = Number(this.a);
			if (this.aNro==0){
			this.textob = this.escrituraCien[this.indice2];
			this.escribirNumero = this.textob;
			}else{
			if (this.indice2==-1){
			this.textoa = this.escrituraCentenas[this.indice1];	
			this.escribirNumero = this.textoa;
			}else{
			this.textoa = this.escrituraCentenas[this.indice1];	
			this.textob = this.escrituraCien[this.indice2];
			this.escribirNumero = this.textoa+' '+this.textob;
			}}}
	return this.escribirNumero;
	}

// CAPTA ESCRITURA HASTA EL NUMERO MIL - EN PORTUGUéS

	captarEscrituraIntermedioPT<Type>(arg2:number):string{
	if (arg2 == 1000){
		this.escribirNumero = 'MIL';
		}else{
		this.texto= arg2.toString();
		this.a = this.texto.slice(-3,-2);
		this.b1 = this.texto.slice(-2);
		this.c = this.b1.substring(0,1);
		this.b2 = this.texto.slice(-1);
			if (this.c == '0'){
			this.b = this.b2;
			}else{
			this.b = this.b1;
			}	
		this.indice1 = Number(this.a);
		this.indice1 = this.indice1-1;
		this.indice2 = Number(this.b);
		this.indice2 = this.indice2-1;
		this.aNro = Number(this.a);
			if (this.aNro==0){
			this.textob = this.escrituraCienPT[this.indice2];
			this.escribirNumero = this.textob;
			}else{
			if (this.indice2==-1){
			this.textoa = this.escrituraCentenasPT[this.indice1];	
			this.escribirNumero = this.textoa;
			}else{
			this.textoa = this.escrituraCentenasPT1[this.indice1];	
			this.textob = this.escrituraCienPT[this.indice2];
			this.escribirNumero = this.textoa+' '+this.textob;
			}}}
	return this.escribirNumero;
	}

// variables para la escritura de numeros de seis y nueve digitos
numeroTexto:string=''; numero1:string=''; numero2:string=''; numero3:string=''; nro1:number=0; nro2:number=0; nro3:number=0;
aFraccion1:string=''; bFraccion1:string='' ;b1Fraccion1:string=''; cFraccion1:string=''; b2Fraccion1:string=''; textoaFraccion1:string=''; textobFraccion1:string='';
aFraccion1Nro:number=0;
indice1a?:number; indice2a?:number;
aFraccion2:string=''; bFraccion2:string=''; b1Fraccion2:string=''; cFraccion2:string=''; b2Fraccion2:string=''; textoaFraccion2:string=''; textobFraccion2:string='';
aFraccion2Nro:number=0;
indice1b?:number; indice2b?:number;
aFraccion3:string=''; bFraccion3:string=''; b1Fraccion3:string=''; cFraccion3:string=''; b2Fraccion3:string=''; textoaFraccion3:string=''; textobFraccion3:string='';
aFraccion3Nro:number=0;
indice1c?:number; indice2c?:number;
escribirFraccion1:string='';
escribirFraccion2:string='';
escribirFraccion3:string='';


// CAPTA ESCRITURA DE NUMEROS DE SEIS DIGITOS		
	
	captarEscrituraIntermedioDos<Type>(arg2:number):string{

				this.numeroTexto= arg2.toString();
				this.numero1=this.numeroTexto.slice(-3);
				this.numero2=this.numeroTexto.slice(-6,-3);
				this.nro1 = Number(this.numero1);
				this.nro2 = Number(this.numero2);
		
				this.aFraccion1 = this.numero1.slice(-3,-2);
				this.b1Fraccion1 = this.numero1.slice(-2);
				this.cFraccion1 = this.b1Fraccion1.substring(0,1);
				this.b2Fraccion1 = this.numero1.slice(-1);
				
				this.aFraccion2 = this.numero2.slice(-3,-2);
				this.b1Fraccion2 = this.numero2.slice(-2);
				this.cFraccion2 = this.b1Fraccion2.substring(0,1);
				this.b2Fraccion2 = this.numero2.slice(-1);
				
				
				if(this.numero1=='100'){
				this.escribirFraccion1 = 'CIEN';
				}else{
						if (this.cFraccion1 == '0'){
							this.bFraccion1 = this.b2Fraccion1;
							}else{
							this.bFraccion1 = this.b1Fraccion1;
							}	
							this.indice1a = Number(this.aFraccion1);
							this.indice1a = this.indice1a-1;
							this.indice2a = Number(this.bFraccion1);
							this.indice2a = this.indice2a-1;
							this.aFraccion1Nro = Number(this.aFraccion1);
							if (this.aFraccion1Nro==0){
							this.textobFraccion1 = this.escrituraCien[this.indice2a];
							this.escribirFraccion1 = this.textobFraccion1;
							}else{
							if (this.indice2a==-1){
							this.textoaFraccion1 = this.escrituraCentenas[this.indice1a];
							this.escribirFraccion1 = this.textoaFraccion1;
							}else{
							this.textoaFraccion1 = this.escrituraCentenas[this.indice1a];
							this.textobFraccion1 = this.escrituraCien[this.indice2a];
							this.escribirFraccion1 = this.textoaFraccion1+' '+this.textobFraccion1;
							}} 
				}
				
				if(this.numero2=='100'){
				this.escribirFraccion2 = 'CIEN';
				}else{
						if (this.cFraccion2 == '0'){
							this.bFraccion2 = this.b2Fraccion2;
							}else{
							this.bFraccion2 = this.b1Fraccion2;
							}	
							this.indice1b = Number(this.aFraccion2);
							this.indice1b = this.indice1b-1;
							this.indice2b = Number(this.bFraccion2);
							this.indice2b = this.indice2b-1;
							this.aFraccion2Nro = Number(this.aFraccion2);
							if (this.aFraccion2Nro==0){
							this.textobFraccion2 = this.escrituraCien1[this.indice2b];
							this.escribirFraccion2 = this.textobFraccion2;
							}else{
							if (this.indice2b==-1){
							this.textoaFraccion2 = this.escrituraCentenas[this.indice1b];
							this.escribirFraccion2 = this.textoaFraccion2;
							}else{
							this.textoaFraccion2 = this.escrituraCentenas[this.indice1b];
							this.textobFraccion2 = this.escrituraCien1[this.indice2b];
							this.escribirFraccion2 =this.textoaFraccion2 +' '+this.textobFraccion2;
							}}
				}
					
		if (this.nro2==0 && this.nro1!=0){
		this.escribirNumero=this.escribirFraccion1;	
		}else{
		if (this.nro2!=0 && this.nro1==0){
		this.escribirNumero=this.escribirFraccion2+' MIL';	
		}else{
		if (this.nro2!=0 && this.nro1!=0){
		this.escribirNumero=this.escribirFraccion2+' MIL '+this.escribirFraccion1;
		}
		}} 
		
	return this.escribirNumero;
	}

// CAPTA ESCRITURA DE NUMEROS DE NUEVE DIGITOS	
	
	captarEscrituraAvanzado<Type>(arg2:number):string{
	if (arg2 == 1000000){
		this.escribirNumero = 'UN MILLÓN';
		}else{
				this.numeroTexto= arg2.toString();
				this.numero1=this.numeroTexto.slice(-3);
				this.numero2=this.numeroTexto.slice(-6,-3);
				this.numero3=this.numeroTexto.slice(-9,-6);
				this.nro1 = Number(this.numero1);
				this.nro2 = Number(this.numero2);
				this.nro3 = Number(this.numero3);
		
				this.aFraccion1 = this.numero1.slice(-3,-2);
				this.b1Fraccion1 = this.numero1.slice(-2);
				this.cFraccion1 = this.b1Fraccion1.substring(0,1);
				this.b2Fraccion1 = this.numero1.slice(-1);
				
				this.aFraccion2 = this.numero2.slice(-3,-2);
				this.b1Fraccion2 = this.numero2.slice(-2);
				this.cFraccion2 = this.b1Fraccion2.substring(0,1);
				this.b2Fraccion2 = this.numero2.slice(-1);
				
				this.aFraccion3 = this.numero3.slice(-3,-2);
				this.b1Fraccion3 = this.numero3.slice(-2);
				this.cFraccion3 = this.b1Fraccion3.substring(0,1);
				this.b2Fraccion3 = this.numero3.slice(-1);
				
				if(this.numero1=='100'){
				this.escribirFraccion1 = 'CIEN';
				}else{
						if (this.cFraccion1 == '0'){
							this.bFraccion1 = this.b2Fraccion1;
							}else{
							this.bFraccion1 = this.b1Fraccion1;
							}	
							this.indice1a = Number(this.aFraccion1);
							this.indice1a = this.indice1a-1;
							this.indice2a = Number(this.bFraccion1);
							this.indice2a = this.indice2a-1;
							this.aFraccion1Nro = Number(this.aFraccion1);
							if (this.aFraccion1Nro==0){
							this.textobFraccion1 = this.escrituraCien[this.indice2a];
							this.escribirFraccion1 = this.textobFraccion1;
							}else{
							if (this.indice2a==-1){
							this.textoaFraccion1 = this.escrituraCentenas[this.indice1a];
							this.escribirFraccion1 = this.textoaFraccion1;
							}else{
							this.textoaFraccion1 = this.escrituraCentenas[this.indice1a];
							this.textobFraccion1 = this.escrituraCien[this.indice2a];
							this.escribirFraccion1 = this.textoaFraccion1+' '+this.textobFraccion1;
							}} 
				}
				
				if(this.numero2=='100'){
				this.escribirFraccion2 = 'CIEN';
				}else{
						if (this.cFraccion2 == '0'){
							this.bFraccion2 = this.b2Fraccion2;
							}else{
							this.bFraccion2 = this.b1Fraccion2;
							}	
							this.indice1b = Number(this.aFraccion2);
							this.indice1b = this.indice1b-1;
							this.indice2b = Number(this.bFraccion2);
							this.indice2b = this.indice2b-1;
							this.aFraccion2Nro = Number(this.aFraccion2);
							if (this.aFraccion2Nro==0){
							this.textobFraccion2 = this.escrituraCien1[this.indice2b];
							this.escribirFraccion2 = this.textobFraccion2;
							}else{
							if (this.indice2b==-1){
							this.textoaFraccion2 = this.escrituraCentenas[this.indice1b];
							this.escribirFraccion2 = this.textoaFraccion2;
							}else{
							this.textoaFraccion2 = this.escrituraCentenas[this.indice1b];
							this.textobFraccion2 = this.escrituraCien1[this.indice2b];
							this.escribirFraccion2 =this.textoaFraccion2 +' '+this.textobFraccion2;
							}}
				}
				
				if(this.numero3=='100'){
				this.escribirFraccion3 = 'CIEN';
				}else{
						if (this.cFraccion3 == '0'){
							this.bFraccion3 = this.b2Fraccion3;
							}else{
							this.bFraccion3 = this.b1Fraccion3;
							}	
							this.indice1c = Number(this.aFraccion3);
							this.indice1c = this.indice1c-1;
							this.indice2c = Number(this.bFraccion3);
							this.indice2c = this.indice2c-1;
							this.aFraccion3Nro = Number(this.aFraccion3);
							if (this.aFraccion3Nro==0){
							this.textobFraccion3 = this.escrituraCien1[this.indice2c];
							this.escribirFraccion3 = this.textobFraccion3;
							}else{
							if (this.indice2c==-1){
							this.textoaFraccion3 = this.escrituraCentenas[this.indice1c];
							this.escribirFraccion3 = this.textoaFraccion3;
							}else{
							this.textoaFraccion3 = this.escrituraCentenas[this.indice1c];
							this.textobFraccion3 = this.escrituraCien1[this.indice2c];
							this.escribirFraccion3 = this.textoaFraccion3+' '+this.textobFraccion3;
							}}
				}
	
		if (this.nro3==0 && this.nro2==0 && this.nro1!=0){
		this.escribirNumero=this.escribirFraccion1;	
		}else{
		if (this.nro3==0 && this.nro2!=0 && this.nro1==0){
		this.escribirNumero=this.escribirFraccion2+' MIL';	
		}else{
		if (this.nro3!=0 && this.nro2==0 && this.nro1==0){
		this.escribirNumero=this.escribirFraccion3+' MILLONES';	
		}else{
		if (this.nro3!=0 && this.nro2==0 && this.nro1!=0){
		this.escribirNumero=this.escribirFraccion3+' MILLONES '+this.escribirFraccion1;	
		}else{
		if (this.nro3!=0 && this.nro2!=0 && this.nro1==0){
		this.escribirNumero=this.escribirFraccion3+' MILLONES '+this.escribirFraccion2+' MIL';
		}else{
		if (this.nro3!=0 && this.nro2!=0 && this.nro1!=0){
		this.escribirNumero=this.escribirFraccion3+' MILLONES '+this.escribirFraccion2+' MIL '+this.escribirFraccion1;
		}	
		}}}}} 	
	}
	return this.escribirNumero;
	}

//FORMATEAR EL NUMERO
numeroFormateado:string='';

	formatearNumero<Type>(arg1:number,arg2:string):string{
				this.numeroTexto= arg1.toString();
				this.numero1=this.numeroTexto.slice(-3);
				this.numero2=this.numeroTexto.slice(-6,-3);
				this.numero3=this.numeroTexto.slice(-9,-6);
				this.nro1 = Number(this.numero1);
				this.nro2 = Number(this.numero2);
				this.nro3 = Number(this.numero3);

		if (this.nro3==0 && this.nro2==0 && this.nro1!=0){
		this.numeroFormateado=this.numero1;	
		}else{
		if (this.nro3==0 && this.nro2!=0 && this.nro1==0){
		this.numeroFormateado=this.numero2 + arg2 + this.numero1;	
		}else{
		if (this.nro3==0 && this.nro2!=0 && this.nro1!=0){
		this.numeroFormateado=this.numero2 + arg2 + this.numero1;	
		}else{
		if (this.nro3!=0 && this.nro2==0 && this.nro1==0){
		this.numeroFormateado=this.numero3 + arg2 + this.numero2 + arg2 + this.numero1;
		}else{
		if (this.nro3!=0 && this.nro2==0 && this.nro1!=0){
		this.numeroFormateado=this.numero3 + arg2 + this.numero2 + arg2 + this.numero1;
		}else{
		if (this.nro3!=0 && this.nro2!=0 && this.nro1==0){
		this.numeroFormateado=this.numero3 + arg2 + this.numero2 + arg2 + this.numero1;
		}else{
		if (this.nro3!=0 && this.nro2!=0 && this.nro1!=0){
		this.numeroFormateado=this.numero3 + arg2 + this.numero2 + arg2 + this.numero1;
		}}}}}}}
	return this.numeroFormateado;
	}


	
}
