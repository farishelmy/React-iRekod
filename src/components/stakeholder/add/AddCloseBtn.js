import React, { Component } from 'react'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {setActivePage} from '../../../actions/layoutInitAction' 
import {setStakehType} from '../../../actions/stakeholderAction/stakehTypeAction'
import {setStkhAccDetail,setAncestor,setDescendant,setcustomField} from '../../../actions/stakeholderAction/stakehUpdateAction'
import {viewStakehGroup,viewStakehMember} from '../../../actions/stakeholderAction/stakehViewDetail'
import {bcUpd} from '../../../actions/stakeholderAction/stakehBreadCrumbAction'


class AddCloseBtn extends Component {

    ActivePage=(e)=>{
        e.preventDefault()   
        
        this.props.bcUpd(false) //Breadcrumb Condition
        
        const {user:{stakeholder_id:bId,bio_access_id:idAccess}} = this.props.session
        const {stakehSel,stakehNumb} = this.props.stakeholderlistType
        // console.log(stakehNumb)   
       
        const stakehObj={
            stakeholder_id:bId,
            bio_access_id:idAccess,
            action:'ITEM_LIST_TYPE',
            stakeh_type: parseInt(stakehNumb),
        }
        this.props.setStakehType(stakehObj) 
        this.props.setActivePage(e.target.getAttribute('data-pagename'))

        const stakehDet={
            stakeholder_id:stakehSel,
            bio_access_id:idAccess,
            action:'ITEM_DETAIL',            
        }
        this.props.setStkhAccDetail(stakehDet)  
        
         //Ancestor Group
         const listAncestor={
            bio_access_id: idAccess,
            stakeholder_id: stakehSel,
            action: "ITEM_LIST_ANCESTOR",
            stakeh_type: parseInt(stakehNumb)      
        }
        this.props.setAncestor(listAncestor)

        //Descendant Member
        const listDescendant={
            bio_access_id: idAccess,
            stakeholder_id: stakehSel,
            action: "ITEM_LIST_DESCENDANT",
            stakeh_type: parseInt(stakehNumb)      
        }
        this.props.setDescendant(listDescendant)

        //Member
        const stakehMember={
            stakeholder_id:stakehSel,
            bio_access_id:idAccess,
            action:'ITEM_LIST_MEMBER',             
        }
        this.props.viewStakehMember(stakehMember)

         //List Group
         const stakehGroup={
            stakeholder_id:stakehSel,
            bio_access_id:idAccess,
            action:'ITEM_LIST_GROUP',             
        }
        this.props.viewStakehGroup(stakehGroup)

        // this.handleWizard()
         
        const customFieldObj={
            action:"ITEM_LIST_ATTRIBUTE",
            bio_access_id: idAccess
        }
        this.props.setcustomField(customFieldObj)

    }

  render() {

    
    
    return (

        <button type="button" className="btn btn-secondary" onClick={this.ActivePage} data-pagename="index">Close</button>


 
 
    )
  }
}
AddCloseBtn.propTypes={
    session: PropTypes.object.isRequired,
    layout: PropTypes.object.isRequired,
    stakeholderlistType: PropTypes.object.isRequired,
    setActivePage: PropTypes.func.isRequired,
    stakeholderView: PropTypes.object.isRequired,
    stakeholderBreadCrumb: PropTypes.object.isRequired,   
    setStakehType: PropTypes.func.isRequired,
    setStkhAccDetail: PropTypes.func.isRequired,
    setAncestor: PropTypes.func.isRequired,
    setDescendant: PropTypes.func.isRequired,
    viewStakehMember: PropTypes.func.isRequired,
    viewStakehGroup: PropTypes.func.isRequired,
    setcustomField: PropTypes.func.isRequired,
    bcUpd: PropTypes.func.isRequired,
    
  }
  const mapStateToProps= state =>({
    session:state.session,
    layout:state.layout,
    stakeholderView: state.stakeholderView,
    stakeholderBreadCrumb: state.stakeholderBreadCrumb,
    stakeholderlistType: state.stakeholderlistType
    


  })
  export default connect(mapStateToProps,{
      setActivePage,
      setStakehType,
      setStkhAccDetail,
      setAncestor,
      setDescendant,
      viewStakehMember,
      viewStakehGroup,
      setcustomField,
      bcUpd,
      
      

    })(AddCloseBtn)
