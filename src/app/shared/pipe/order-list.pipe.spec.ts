import { TrackModel } from '@core/models/tracks.module';
import { OrderListPipe } from './order-list.pipe';
import * as mockTracks from 'src/app/data/tracks.json'

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores',()=>{
    const pipe = new OrderListPipe();
    const {data}:any = (mockTracks as any).default 

    //Act

    const result:TrackModel[] = pipe.transform(data)
    
    //TODO: Assert

    expect(result).toEqual(data)
  })

});
