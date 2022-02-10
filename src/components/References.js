import React, { Component } from 'react';
import SpecificReferences from './SpecificReferences'

class References extends Component {
  render() {
    const personalReferences = [
      {
        fullName: 'Eng. Guillermo Sugasti',
        mobile: '+1 786 451 7990',
        company: 'FIS Global',
        position: 'Financial Analyst Specialist'
      },
      {
        fullName: 'Eng. Agustín Prado',
        mobile: '+34 662 08 72 35',
        company: 'Kodea Software',
        position: 'CEO'
      },
      {
        fullName: 'Acct. Camila Rivero',
        mobile: '+34 660 330 324',
        company: 'Global Shares',
        position: 'Implementations Analyst'
      },
      {
        fullName: 'Acct. Juan Martin Echeguia',
        mobile: '+34 662 087 228',
        company: 'Kodea Software',
        position: 'CTO'
      }
    ]

    const jobReferences = [
      {
        fullName: 'Eng. Santiago Bertinat',
        mobile: '+598 94 572 567',
        company: 'Eagerworks srl',
        position: 'CEO'
      },
      {
        fullName: 'Ignacio Grondona',
        mobile: '+598 98 554 624',
        company: 'Eagerworks srl',
        position: 'Technical Leader'
      },
      {
        fullName: 'Eng. Jimena Vanoli',
        mobile: '+598 99 459 100',
        company: 'Montevideo Refrescos SRL',
        position: 'Maintenance Manager'
      },
      {
        fullName: 'Eng. Agustín Irazoqui',
        mobile: '+598 91 444 242',
        company: 'Yazaki Uruguay SA',
        position: 'General Manager'
      }
    ]

    return (
      <div className="card-body row py-0">
        <SpecificReferences title="Personal" defaultReferences={personalReferences} />
        <SpecificReferences title="Job" defaultReferences={jobReferences} />
      </div>
    );
  }
}

export default References;
