import React from 'react'
import styles from './TopCompanies.module.css';

const companies_profiles = [
  {
    companyLogo: 'https://skilldb-ai-resume.s3.ap-south-1.amazonaws.com/company_profile/6482ec674adeb083f9af7205_logo.svg',
    companyName: 'OpenXcell Technolabs Pvt. Ltd',
    companyTags: ['Performance Bonus', '5 Days Working', 'Paid Sick Leaves'],
    noOfActiveJobs: 4,
  },
  {
    companyLogo: 'https://skilldb-ai-resume.s3.ap-south-1.amazonaws.com/company_profile/6509884f3eecc37fd4001514_logo.png',
    companyName: 'Adobe',
    companyTags: ['Global gender pay parity', 'Incentive Pay', 'Perfomance based awards'],
    noOfActiveJobs: 3,
  },
  {
    companyLogo: 'https://skilldb-ai-resume.s3.ap-south-1.amazonaws.com/company_profile/65118019fe0eab05718f28fc_logo.png',
    companyName: 'Tech Mahindra',
    companyTags: ['Paid Time Off & Public Holiday', 'Bereavement Leave', 'Parental Care Leave'],
    noOfActiveJobs: 3,
  },
  {
    companyLogo: 'https://skilldb-ai-resume.s3.ap-south-1.amazonaws.com/company_profile/65129f38fe0eab05718f5269_logo.svg',
    companyName: 'Microsoft',
    companyTags: ['Flexible work', 'Pay equity', 'Health care benefits'],
    noOfActiveJobs: 3,
  },
  {
    companyLogo: 'https://skilldb-ai-resume.s3.ap-south-1.amazonaws.com/company_profile/6512ae1afe0eab05718f54fe_logo.svg',
    companyName: 'Tata Consultancy Services',
    companyTags: ['Learning & Development', 'Inclusive Workplace'],
    noOfActiveJobs: 3,
  },
]
const TopCompanies = () => {
  return (
    <div className={styles.topCompanies}>
      {/* <div className={styles.companyCard}>
        <div className={styles.companyLogo}>
          <img src='https://skilldb-ai-resume.s3.ap-south-1.amazonaws.com/company_profile/6482ec674adeb083f9af7205_logo.svg' />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.05 5.95226C18.909 5.82933 18.7347 5.75107 18.5491 5.72742C18.3635 5.70377 18.1751 5.73581 18.0078 5.81945L14.0852 7.77257L10.8102 2.33273C10.726 2.19314 10.6071 2.07767 10.4652 1.99752C10.3233 1.91736 10.163 1.87524 10 1.87524C9.83699 1.87524 9.67674 1.91736 9.5348 1.99752C9.39285 2.07767 9.27403 2.19314 9.18984 2.33273L5.91484 7.77491L1.99375 5.82179C1.82683 5.73889 1.63914 5.70714 1.45424 5.73052C1.26934 5.7539 1.09546 5.83137 0.954429 5.95321C0.813396 6.07505 0.711491 6.23583 0.6615 6.41537C0.61151 6.59491 0.615662 6.78522 0.673434 6.96242L3.56406 15.8187C3.59312 15.9076 3.6418 15.9889 3.70649 16.0566C3.77119 16.1242 3.85025 16.1765 3.93784 16.2095C4.02542 16.2425 4.11931 16.2554 4.21255 16.2472C4.30579 16.2391 4.39602 16.2101 4.47656 16.1624C4.49609 16.1507 6.49375 14.9999 10 14.9999C13.5062 14.9999 15.5039 16.1507 15.5219 16.1616C15.6024 16.2098 15.6928 16.2392 15.7863 16.2476C15.8798 16.256 15.974 16.2433 16.0618 16.2103C16.1497 16.1774 16.2291 16.1251 16.294 16.0573C16.3589 15.9895 16.4076 15.9079 16.4367 15.8187L19.3273 6.96476C19.3868 6.78752 19.3921 6.5966 19.3427 6.4163C19.2934 6.236 19.1915 6.07447 19.05 5.95226ZM13.7375 12.2499C13.712 12.3945 13.6364 12.5255 13.524 12.6199C13.4115 12.7143 13.2695 12.7662 13.1227 12.7663C13.086 12.7663 13.0494 12.7631 13.0133 12.7569C11.0169 12.4142 8.9768 12.4142 6.98047 12.7569C6.89962 12.7712 6.81676 12.7694 6.73661 12.7516C6.65646 12.7339 6.5806 12.7005 6.51335 12.6534C6.37753 12.5583 6.28505 12.4132 6.25625 12.2499C6.22745 12.0866 6.26469 11.9186 6.35977 11.7828C6.45486 11.647 6.6 11.5545 6.76328 11.5257C8.90333 11.158 11.0904 11.158 13.2305 11.5257C13.3116 11.5396 13.3892 11.5694 13.4588 11.6133C13.5284 11.6573 13.5886 11.7145 13.636 11.7818C13.6834 11.8491 13.7171 11.9251 13.735 12.0054C13.753 12.0858 13.7549 12.1688 13.7406 12.2499H13.7375Z" fill="#EEB80B"></path></svg>
        </div>
        <h3>OpenXcell Technolabs Pvt. Ltd</h3>
        <div className={styles.companyData}>
          <span>Performance Bonus</span>
          <span>5 Days Working</span>
          <span>Paid Sick Leaves</span>
        </div>
        <div className={styles.activeJobs}>4 jobs active</div>
      </div> */}
      {companies_profiles.map((eachCompany, i) => (
        <div key={i} className={styles.companyCard}>
          <div className={styles.companyLogo}>
            <img src={eachCompany.companyLogo} />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.05 5.95226C18.909 5.82933 18.7347 5.75107 18.5491 5.72742C18.3635 5.70377 18.1751 5.73581 18.0078 5.81945L14.0852 7.77257L10.8102 2.33273C10.726 2.19314 10.6071 2.07767 10.4652 1.99752C10.3233 1.91736 10.163 1.87524 10 1.87524C9.83699 1.87524 9.67674 1.91736 9.5348 1.99752C9.39285 2.07767 9.27403 2.19314 9.18984 2.33273L5.91484 7.77491L1.99375 5.82179C1.82683 5.73889 1.63914 5.70714 1.45424 5.73052C1.26934 5.7539 1.09546 5.83137 0.954429 5.95321C0.813396 6.07505 0.711491 6.23583 0.6615 6.41537C0.61151 6.59491 0.615662 6.78522 0.673434 6.96242L3.56406 15.8187C3.59312 15.9076 3.6418 15.9889 3.70649 16.0566C3.77119 16.1242 3.85025 16.1765 3.93784 16.2095C4.02542 16.2425 4.11931 16.2554 4.21255 16.2472C4.30579 16.2391 4.39602 16.2101 4.47656 16.1624C4.49609 16.1507 6.49375 14.9999 10 14.9999C13.5062 14.9999 15.5039 16.1507 15.5219 16.1616C15.6024 16.2098 15.6928 16.2392 15.7863 16.2476C15.8798 16.256 15.974 16.2433 16.0618 16.2103C16.1497 16.1774 16.2291 16.1251 16.294 16.0573C16.3589 15.9895 16.4076 15.9079 16.4367 15.8187L19.3273 6.96476C19.3868 6.78752 19.3921 6.5966 19.3427 6.4163C19.2934 6.236 19.1915 6.07447 19.05 5.95226ZM13.7375 12.2499C13.712 12.3945 13.6364 12.5255 13.524 12.6199C13.4115 12.7143 13.2695 12.7662 13.1227 12.7663C13.086 12.7663 13.0494 12.7631 13.0133 12.7569C11.0169 12.4142 8.9768 12.4142 6.98047 12.7569C6.89962 12.7712 6.81676 12.7694 6.73661 12.7516C6.65646 12.7339 6.5806 12.7005 6.51335 12.6534C6.37753 12.5583 6.28505 12.4132 6.25625 12.2499C6.22745 12.0866 6.26469 11.9186 6.35977 11.7828C6.45486 11.647 6.6 11.5545 6.76328 11.5257C8.90333 11.158 11.0904 11.158 13.2305 11.5257C13.3116 11.5396 13.3892 11.5694 13.4588 11.6133C13.5284 11.6573 13.5886 11.7145 13.636 11.7818C13.6834 11.8491 13.7171 11.9251 13.735 12.0054C13.753 12.0858 13.7549 12.1688 13.7406 12.2499H13.7375Z" fill="#EEB80B"></path></svg>
          </div>
          <h3>{eachCompany.companyName}</h3>
          <div className={styles.companyData}>
            {eachCompany.companyTags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
          <div className={styles.activeJobs}>{eachCompany.noOfActiveJobs} jobs active</div>
        </div>
      ))}
    </div>
  )
}

export default TopCompanies