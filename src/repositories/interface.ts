import IModel from '../model/index'

export default interface IRepository {
    create  (data: any): Promise<Object>;
    get     (id: number): Promise<Object>;
    index   (): Promise<Object>;
    update  (id: number, data: any): Promise<Object>;
    destroy (id: number): Promise<Object>;
}
