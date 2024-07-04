// This is the Sidebar imports
import userIcon from '../img/user.png'
import guarantorsIcon from '../img/Guarantors.png'
import loansIcon from '../img/Loans.png'
import decisionModelsIcon from '../img/Decision Models.png'
import savingsIcon from '../img/Savings.png'
import loanRequestsIcon from '../img/Loan Requests.png'
import whitelistIcon from '../img/Whitelist.png'
import karmaIcon from '../img/Karma.png'

import organizationIcon from '../img/Organization.png'
import loanproductsIcon from '../img/Loan Products.png'
import savingsProductsIcon from '../img/Savings Products.png'
import feesAndChargesIcon from '../img/Fees and Charges.png'
import servicesIcon from '../img/Services.png'
import serviceAccountIcon from '../img/Service Account.png'
import settlementsIcon from '../img/Settlements.png'
import reportsIcon from '../img/Reports.png'

import prefrencesIcon from '../img/Prefences.png'
import feesAndPricing from '../img/Fees and Pricing.png'
import auditLogsIcon from '../img/Audit Logs.png'

import switchOrganizationIcon from '../img/Switch Organzation.png'
import endIcon from '../img/end.png'
import dashboardIcon from '../img/Dashboard.png'

import '../styles/Sidebar.css'


const Sidebar = () => {
  
  return (
    <>
      {/* While changng from normal to active link, we only need to add active to the lst of classes on the sidebar-child-con element */}
      <nav aria-label='secondary-navigation' className='sidebar-nav'>
        <section className='sidebar-sect'>
          <div className='sidebar-child-con add-padding'>
            <div className='sidebar-link-icon'>
              <img src={switchOrganizationIcon} alt="switch organzation" />
            </div>
            <div className='sidebar-nav-name'>
              Switch Organization
            </div>
            <div className='sidebar-link-end-icon'>
              <img src={endIcon} alt="end" />
            </div>
          </div>

          <div className='sidebar-child-con'>
            <div className='sidebar-link-icon'>
              <img src={dashboardIcon} alt="dashboard Icon" />
            </div>
            <div className='sidebar-nav-name'>
              Dashboard
            </div>
          </div>
        </section>
        <section className='sidebar-sect'>

          <div className='section-title'>
            CUSTOMERS
          </div>
        
          <div className='sidebar-child-con active'>
            <div className='sidebar-link-icon'>
              <img src={userIcon} alt="user icon" />
            </div>
            <div className='sidebar-nav-name'>
              Users
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={guarantorsIcon} alt="guarantors" />
            </div>
            <div className='sidebar-nav-name'>
              Guarantors
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={loansIcon} alt="loans" />
            </div>
            <div className='sidebar-nav-name'>
              Loans
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={decisionModelsIcon} alt="decision models" />
            </div>
            <div className='sidebar-nav-name'>
              Decision Models
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={savingsIcon} alt="savings" />
            </div>
            <div className='sidebar-nav-name'>
              Savngs
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={loanRequestsIcon} alt="loan requests" />
            </div>
            <div className='sidebar-nav-name'>
              Loan Requests
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={whitelistIcon} alt="whitelist" />
            </div>
            <div className='sidebar-nav-name'>
              Whitelist
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={karmaIcon} alt="Karma" />
            </div>
            <div className='sidebar-nav-name'>
              Karma
            </div>
          </div>
        </section>
        <section className='sidebar-sect'>

          <div className='section-title'>
            BUSINESSES
          </div>
        
          <div className='sidebar-child-con'>
            <div className='sidebar-link-icon'>
              <img src={organizationIcon} alt="organization" />
            </div>
            <div className='sidebar-nav-name'>
              Organization
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={loanproductsIcon} alt="loan products" />
            </div>
            <div className='sidebar-nav-name'>
              Loan Products
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={savingsProductsIcon} alt="saving products" />
            </div>
            <div className='sidebar-nav-name'>
              Saving Products
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={feesAndChargesIcon} alt="fees and charges" />
            </div>
            <div className='sidebar-nav-name'>
              Fees and Charges
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={servicesIcon} alt="savings" />
            </div>
            <div className='sidebar-nav-name'>
              Services
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={serviceAccountIcon} alt="service account" />
            </div>
            <div className='sidebar-nav-name'>
              Service Account
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={settlementsIcon} alt="settlements icon" />
            </div>
            <div className='sidebar-nav-name'>
              Settlements
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={reportsIcon} alt="reports" />
            </div>
            <div className='sidebar-nav-name'>
              Reports
            </div>
          </div>
        </section>
        <section className='sidebar-sect'>

          <div className='section-title'>
            SETTINGS
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={prefrencesIcon} alt="prefrences icon" />
            </div>
            <div className='sidebar-nav-name'>
              Prefrences
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={feesAndPricing} alt="fees and pricing icon" />
            </div>
            <div className='sidebar-nav-name'>
              Fees And Prcing
            </div>
          </div>

          <div className='sidebar-child-con '>
            <div className='sidebar-link-icon'>
              <img src={auditLogsIcon} alt="Audit Logs icon" />
            </div>
            <div className='sidebar-nav-name'>
              Audit Logs
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}

export default Sidebar