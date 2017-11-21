
import messagerie from '../pages/Messagerie'
import gopca from '../pages/GoPca'
import safe from '../pages/Safe'
import annuaire from '../pages/Annuaire'

export default {
        buttons : [
                      {
                        'page' : annuaire,
                        'label' : 'Numeros Utiles'
                      },
                      {
                        'page' : messagerie,
                        'label' : 'Messagerie alert' 
                      }, 
                      { 
                        'page' : safe,
                        'label' : 'Solution "SAFE"' 
                      }, 
                      {
                        'page' : gopca,
                        'label' : 'GoPCA'
                      },
                      {
                        'page' : gopca,
                        'label' : 'Kit de crise'
                      },
                      {
                        'page' : gopca,
                        'label' : 'Infos diverses'
                      }  
                    ]
        }
