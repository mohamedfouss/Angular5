export class AppareilService{
    appareils = [
        {
          name: 'Télé',
          status: 'Allumé'
        },
        {
          name: 'PC',
          status: 'Allumé'
        },
        {
          name: 'Tablette',
          status: 'Eteint'
        }
      ];

      switchOnAll(){
          for(let appareil of this.appareils){
            appareil.status = 'Allumé';
          }
      }

      switchOffAll(){
        for(let appareil of this.appareils){
          appareil.status = 'Eteint';
        }
    }

    switchOnOne(index: number){
        this.appareils[index].status = 'Allumé';
    }
    switchOffOne(index: number){
        this.appareils[index].status = 'Eteint';
    }
}