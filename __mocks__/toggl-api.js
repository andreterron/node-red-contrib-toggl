MockToggle = jest.fn()

MockToggle.getWorkspaces = jest.fn(cb=>cb(null, {}))
MockToggle.startTimeEntry = jest.fn((d, cb)=>cb(null, d))

module.exports = MockToggle