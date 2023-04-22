import { doGreetings } from './index'

describe('Example', () => {
  it('should be true', () => {
    vi.spyOn(console, 'log')
    doGreetings()
    expect(console.log).toHaveBeenCalledWith('Hello World!')
  })
})
