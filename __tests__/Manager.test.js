const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
  it("can be instantiated", () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe("object");
    expect(engineer instanceof Engineer).toBe(true);
  })

  it('should have a name property that can be set on instanstiation', () => {
    const engineer= new Engineer('Dave');
    expect(engineer.name).toBe('Dave');
  })

  it('should have a id property that can be set on instanstiation', () => {
    const engineer = new Engineer('Dave', 1);
    expect(engineer.id).toBe(1);
  })
});