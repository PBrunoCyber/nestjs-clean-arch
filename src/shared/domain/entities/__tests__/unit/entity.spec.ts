import {validate as UUIDvalidate} from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string,
  prop2: number
}

class StubEntity extends Entity<StubProps>{

}

describe("UserEntity unit tests", () => {


  it("Should set props and id", () => {
    const props = {prop1: 'value1', prop2: 15};
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(UUIDvalidate(entity._id)).toBeTruthy();
  })

  it("Should convert a entity to a JavaScript Object", () => {
    const props = {prop1: 'value1', prop2: 15};
    const id = '743aac8f-38a4-42bb-a1a2-c69020c4123f';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    });
  })
})
