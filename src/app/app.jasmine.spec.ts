import myTest from './app.jasmine';

describe('myTest',() => {
   it('donc 6', () => {
       let a = 3;
       expect ( myTest (a)).toBe(6)
   });
    
});