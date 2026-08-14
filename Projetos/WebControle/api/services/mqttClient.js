import mqtt from "mqtt";

// ========== CONFIGURAÇÕES DO BROKER ==========
const MQTT_BROKER_HOST = '1fc6157e6caf4d6b86e34770d9f83882.s1.eu.hivemq.cloud';
const MQTT_BROKER_PORT = 8883;
const MQTT_USERNAME = 'ricardodias';
const MQTT_PASSWORD = 'TesteSenai1';

// ========== TÓPICOS ==========
const TOPICO_STATUS = 'aula/36/status';
const TOPICO_ESTADO_LED = 'aula/36/estadoLed';


// ========== VARIÁVEIS GLOBAIS ==========
let mqttClient = null;          // Guarda a conexão MQTT
let conectado = false;       // Evita conectar 2 vezes ao mesmo tempo
const subscriptions = {};       // Guarda as funções de callback dos tópicos

const mqttOptions = {
    port: MQTT_BROKER_PORT,
    username: MQTT_USERNAME,
    password: MQTT_PASSWORD,
    protocol: 'mqtts',
    reconnectPeriod: 1000,
};


function conectarMqtt(){
    //valida e ja esta conectado
    if(mqttClient?.connected || conectado){
        console.log('MQTT ja conctado');
        return
    }

    console.log('MQTT tentando conectar...');
    mqttClient = mqtt.connect(`mqtts://${MQTT_BROKER_HOST}`, mqttOptions)
    conectado = true;

    //quando conectado com sucesso
    mqttClient.on('connect', () =>{
        console.log('MQTT conectadoo');
        
        //realizando as incrições em todos os topicos
        const topicos = [
            TOPICO_STATUS,
            TOPICO_ESTADO_LED
        ] 
        //PERCORRENDO O VETOR FAZENDO UMA ASSINATURA
        mqttClient.subscribe(topicos, (error) =>{
            if(!error){
                console.log(`MQTT incrito em ${topicos.length} topicos`);
                
            }
        })
    })
    //quando receber uma mensagem alterada 
    mqttClient.on('message', (topic, message) => {
        //se existe uma função cadastrada nesse topico recebe a mensagem
        if (subscriptions[topic]){
            subscriptions[topic](message.toString()
    )}
    })

    //quando executar um erro
    mqttClient.on('error', (error) => {
    conectado = false
    console.error('MQTT: erro -> ', error.message);
    
    })
    
    mqttClient.on('close', () => {
    conectado = false
    console.error('MQTT: Conexao fechada');
    
    })
    //quando ficar offline
    mqttClient.on('offline', () => {
    console.error('MQTT: Ficou offline');
    
    })
    mqttClient.on('reconnect', () => {
    console.error('Tentando conexao');
    
    })
}
//função de escuta
function onMessage(topic, callback){
    subscriptions[topic] = callback
}
//função para publicar
function publicar(topic, message){
    //retorna uma promessa para usar nas rotas 
    return new Promise((resolve, reject) => {
        if(!mqttClient || !mqttClient.connected){
            console.log('MQTT não esta conectado')
            reject(new Error('Cliente MQTT não esta conectado'))
            return;
        }

        mqttClient.publish(topic, message, {retain: true}, (error) =>{
            if(error){
                console.log('MQTT: Erro ao publicar', error.message);
                reject(new Error('Erro ao publicar'))
                
            }else{
                console.log(`MQTT: Enviado ${topic}: ${message}`)
                resolve(); //deu certp
                
            }
        })
    })
}
conectarMqtt(); //chamando a função

//exportando asfunções para usar em outro local
export{publicar, onMessage, TOPICO_ESTADO_LED, TOPICO_STATUS}
