import BaseExtend from '../extends/base'

class Files extends BaseExtend {
  constructor(endpoint) {
    super(endpoint)

    this.endpoint = 'files'
  }

  Create(body) {
    return this.request.send(`${this.endpoint}`, 'POST', body)
  }

  Delete(id) {
    return this.request.send(`${this.endpoint}/${id}`, 'DELETE')
  }
}

export default Files
