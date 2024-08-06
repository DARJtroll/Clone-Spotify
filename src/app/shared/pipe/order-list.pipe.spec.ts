import { TrackModel } from '@core/models/tracks.module';
import { OrderListPipe } from './order-list.pipe';
import * as mockTracks from 'src/app/data/tracks.json'

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores',()=>{

    //Arrange 

    const pipe = new OrderListPipe();
    const {data}:any = (mockTracks as any).default 

    //Act

    const result:TrackModel[] = pipe.transform(data)
    
    //TODO: Assert

    expect(result).toEqual(data)
  })

  it('Probar si se ordena de manera correcta ASC: ',() => {
    const pipe = new OrderListPipe();
    const {data}:any = (mockTracks as any).default

    const firstValue = data.find((i:any) => i._id === 2)
    const lastValue = data.find((i:any) => i._id === 7)

    const resultado: TrackModel[] = pipe.transform(data,'name','asc')
    const firstResult = resultado[0]
    const lastResult = resultado[resultado.length-1]

    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)

  })

});
