
import messagerie from '../pages/Messagerie'
import gopca from '../pages/GoPca'
import safe from '../pages/Safe'
import annuaire from '../pages/Annuaire'

export default {
        buttons : [
                      { 
                        'page' : safe,
                        'label' : 'SAFE' 
                      }, 
                      {
                        'page' : annuaire,
                        'label' : 'ANNUAIRE'
                      },
                      {
                         'page' : messagerie,
                        'label' : 'MESSAGERIE' 
                      }, 
                      {
                        'page' : gopca,
                        'label' : 'GO PCA'
                      }  
                    ]
        }
