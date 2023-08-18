const jwtData = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


function encodeBase64(str) {
  return  Buffer.from(str, 'base64').toString()
}

class JWTParser {
  #header
  #payload
  #signature
  #jwt

  constructor(jwtString){
    this.#jwt = jwtString
    const [jwtHeader, jwtPayload, jwtSignature] = jwtString.split('.')
    this.#header = jwtHeader
    this.#payload = jwtPayload
    this.#signature = jwtSignature
  }

  get header() {
    return encodeBase64(this.#header)
  }

  get payload() {
    return encodeBase64(this.#payload)
  }

  get signature() {
    return this.#signature
  }
}

const jwt = new JWTParser(jwtData)

console.log(jwt.header, jwt.payload, jwt.signature)