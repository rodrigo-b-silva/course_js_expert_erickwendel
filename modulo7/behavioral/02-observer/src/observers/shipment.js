export default class Shipment {
  update({ id, userName }) {
    //importe lembrar que cada [update] é obrigatório de tratar seus erros/exceptions
    //não deve ter await no notify, sua responsabilidade é só emitir eventos
    console.log(`[${id}]: [shipment] will pack the user's order to [${userName}]`)
  }
}