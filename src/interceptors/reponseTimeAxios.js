export default (axios) => {
  // add startTime of request
  axios.interceptors.request.use(
    (config) => {
      const newConfig = { ...config }
      newConfig.metadata = { startTime: new Date() }
      return newConfig
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // add responseTime in response or error
  axios.interceptors.response.use(
    (response) => {
      const newRes = { ...response }
      newRes.config.metadata.endTime = new Date()
      newRes.responseTime =
        newRes.config.metadata.endTime - newRes.config.metadata.startTime
      return newRes
    },
    (error) => {
      const newError = { ...error }
      newError.config.metadata.endTime = new Date()
      newError.responseTime =
        newError.config.metadata.endTime - newError.config.metadata.startTime
      return Promise.reject(newError)
    }
  )
};