const repository = require('../repositories/log-repository')

exports.index = async(_req, res) => {
  try { 
    let logs = await repository.all()
    res.status(200).send({ count: logs.length, data: logs })
  } catch(error) { res.status(500).send({ message: 'Ação não permitida' }) }
}

exports.show = async(req, res) => {
  try { 
    const log = await repository.findById(req.params.logId)
    if (log) { 
      res.status(200).send(log) 
    } else {
      res.status(403).send({ message: 'Log não encotrado' })
    }
  } catch(error) {
    res.status(500).json({ message: 'Ação não permitida' })
  }
}