import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  faqData = [
    {
      title: 'Questions and Answers on Tax law in Nigeria:',
      expanded: true,
      questions: [
        {
          question: "What is the primary legislation governing taxation in Nigeria?",
          answer: "The primary legislation governing taxation in Nigeria includes the Companies Income Tax Act (CITA) for companies, the Personal Income Tax Act (PITA) for individuals, the Petroleum Profits Tax Act (PPTA) for oil companies, and the Value Added Tax Act.",
          expanded: false
          },
          {
          question: "What is the current corporate income tax rate in Nigeria?",
          answer: "The standard corporate income tax rate in Nigeria is 30% of taxable profits. Small companies with turnover less than ₦25 million are exempt, while medium-sized companies with turnover between ₦25 million and ₦100 million pay 20%.",
          expanded: false
          },
          {
          question: "What are the current personal income tax rates in Nigeria?",
          answer: "Personal income tax in Nigeria is progressive, with rates ranging from 7% to 24%. The first ₦300,000 is taxed at 7%, and the highest rate of 24% applies to income over ₦3,200,000. A consolidated relief allowance of ₦200,000 plus 1% of gross income is also applicable.",
          expanded: false
          },
          {
          question: "What is the Tertiary Education Tax in Nigeria?",
          answer: "The Tertiary Education Tax is a 2.5% tax on the assessable profits of companies registered in Nigeria. It was established by the Tertiary Education Trust Fund (Establishment) Act of 2011 to improve the quality of tertiary education in Nigeria.",
          expanded: false
          },
          {
          question: "What is the Value Added Tax (VAT) rate in Nigeria?",
          answer: "The standard VAT rate in Nigeria is 7.5% as of 2024. This rate was increased from 5% in February 2020 following the Finance Act 2019.",
          expanded: false
          },
          {
          question: "What is the Petroleum Profits Tax (PPT) rate in Nigeria?",
          answer: "The Petroleum Profits Tax rate varies depending on the nature of the operation. For companies in Joint Venture operations with NNPC, the rate is 85% of chargeable profits. For companies operating under Production Sharing Contracts, the rate is 50%.",
          expanded: false
          },
          {
          question: "What is the Capital Gains Tax (CGT) rate in Nigeria?",
          answer: "The Capital Gains Tax rate in Nigeria is 10% on the gains from the disposal of chargeable assets. However, gains from the disposal of shares are exempt from CGT.",
          expanded: false
          },
          {
          question: "Who administers federal taxes in Nigeria?",
          answer: "The Federal Inland Revenue Service (FIRS) is responsible for administering federal taxes in Nigeria.",
          expanded: false
          },
          {
          question: "What is the tax year in Nigeria?",
          answer: "The tax year in Nigeria is the calendar year, running from January 1 to December 31.",
          expanded: false
          },
          {
          question: "What is the deadline for filing corporate tax returns in Nigeria?",
          answer: "Companies are required to file their tax returns within six months after the end of their accounting year.",
          expanded: false
          },
          {
          question: "What is the withholding tax rate on dividends in Nigeria?",
          answer: "The withholding tax rate on dividends in Nigeria is 10% for both residents and non-residents.",
          expanded: false
          },
          {
          question: "Are there any tax incentives for foreign investors in Nigeria?",
          answer: "Yes, Nigeria offers various tax incentives for foreign investors, including pioneer status incentives, which provide tax holidays for companies in specific industries.",
          expanded: false
          },
          {
          question: "What is the stamp duty rate in Nigeria?",
          answer: "Stamp duty rates vary depending on the type of transaction. For example, the rate for share transfer agreements is 0.75% of the consideration.",
          expanded: false
          },
          {
          question: "Is there a minimum tax provision in Nigeria?",
          answer: "Yes, companies are subject to minimum tax if they have no taxable profits or if the tax payable is less than the minimum tax. The minimum tax is generally 0.5% of gross turnover less franked investment income.",
          expanded: false
          },
          {
          question: "What is the tax treatment of capital allowances in Nigeria?",
          answer: "Capital allowances are deductions allowed to companies for qualifying capital expenditure. The rates vary depending on the type of asset, ranging from 5% to 95% in the first year.",
          expanded: false
          },
          {
          question: "How are foreign exchange gains and losses treated for tax purposes in Nigeria?",
          answer: "Realized foreign exchange gains are taxable, while realized foreign exchange losses are tax-deductible. Unrealized gains and losses are not recognized for tax purposes.",
          expanded: false
          },
          {
          question: "What is the tax implication of thin capitalization rules in Nigeria?",
          answer: "Nigeria introduced thin capitalization rules in the Finance Act 2019. Interest expense deduction is limited to 30% of EBITDA for related party transactions.",
          expanded: false
          },
          {
          question: "How are expatriates taxed in Nigeria?",
          answer: "Expatriates are taxed on their Nigerian-sourced income. If they become resident in Nigeria, they are taxed on their worldwide income.",
          expanded: false
          },
          {
          question: "What is the tax treatment of dividends received by a Nigerian company from another Nigerian company?",
          answer: "Dividends received by a Nigerian company from another Nigerian company are exempt from further tax, as they are considered franked investment income.",
          expanded: false
          },
          {
          question: "What is the significance of the FIRS v. Gazprom Oil & Gas Nigeria Limited (2020) case?",
          answer: "This case clarified the application of VAT on gas supplied in Nigeria. The Tax Appeal Tribunal ruled that the supply of gas to downstream companies is subject to VAT, rejecting the argument that such supplies should be zero-rated.",
          expanded: false
          },
          {
          question: "What is the significance of the Citibank Nigeria Limited v. FIRS (2017) case?",
          answer: "This case addressed the issue of excess dividend tax. The Federal High Court ruled that where a company pays dividends in excess of its taxable profits, such excess dividends will be subject to Companies Income Tax at 30%, even if the profits from which the dividends were paid had already been subjected to tax.",
          expanded: false
          },
          {
          question: "What is the landmark case regarding the taxation of non-resident companies in Nigeria?",
          answer: "A landmark case is Vodacom Business Nigeria Limited v. Federal Inland Revenue Service (2019). The Tax Appeal Tribunal ruled that the income of non-resident companies providing services to Nigerian companies is subject to withholding tax, even if the services are performed outside Nigeria.",
          expanded: false
          },
          {
          question: "What is the tax treatment of business losses in Nigeria?",
          answer: "Business losses can be carried forward indefinitely and offset against future profits from the same trade or business.",
          expanded: false
          },
          {
          question: "How are insurance companies taxed in Nigeria?",
          answer: "Insurance companies are taxed under CITA. Life insurance businesses are taxed at 0% on investment income of the life fund, while non-life businesses are taxed at the standard corporate tax rate.",
          expanded: false
          },
          {
          question: "What is the tax treatment of mergers and acquisitions in Nigeria?",
          answer: "Mergers and acquisitions may qualify for tax-free reorganization if certain conditions are met, including continuity of business and shareholding.",
          expanded: false
          },
          {
          question: "What is the tax implication of transfer pricing in Nigeria?",
          answer: "Nigeria has transfer pricing regulations that require transactions between related parties to be at arm's length. Companies are required to maintain transfer pricing documentation.",
          expanded: false
          },
          {
          question: "What is the tax treatment of royalties in Nigeria?",
          answer: "Royalties are subject to withholding tax at a rate of 10% for residents and 10% for non-residents, unless reduced by a tax treaty.",
          expanded: false
          },
          {
          question: "How are pension contributions treated for tax purposes in Nigeria?",
          answer: "Pension contributions are tax-deductible up to a maximum of 20% of the employee's total emoluments.",
          expanded: false
          },
          {
          question: "What is the tax treatment of agricultural businesses in Nigeria?",
          answer: "Agricultural businesses enjoy various tax incentives, including a tax-free period of 5 years (renewable for another 3 years) for certain agricultural activities.",
          expanded: false
          },
          {
          question: "What is the significance of the Shell Petroleum Development Company of Nigeria v. FIRS (2016) case?",
          answer: "This case addressed the issue of education tax assessment. The Tax Appeal Tribunal ruled that education tax should be assessed on total profits and not on assessable profits.",
          expanded: false
          },
          {
          question: "What is the tax treatment of interest income in Nigeria?",
          answer: "Interest income is generally subject to withholding tax at 10%. For corporate recipients, this is the final tax, while for individuals, it's treated as a payment on account.",
          expanded: false
          },
          {
          question: "How are Real Estate Investment Trusts (REITs) taxed in Nigeria?",
          answer: "REITs that distribute at least 75% of their income to unit holders are exempt from corporate income tax. The distributions are subject to withholding tax.",
          expanded: false
          },
          {
          question: "What is the tax treatment of research and development expenses in Nigeria?",
          answer: "Research and development expenses are tax-deductible. An additional 20% investment tax credit is available for companies engaged in R&D for commercialization.",
          expanded: false
          },
          {
          question: "How are capital gains on disposal of assets by individuals taxed in Nigeria?",
          answer: "Capital gains on disposal of assets by individuals are subject to Capital Gains Tax at 10%, except for gains from disposal of shares which are exempt.",
          expanded: false
          },
          {
          question: "What is the tax treatment of free zone enterprises in Nigeria?",
          answer: "Free zone enterprises are exempt from all federal, state, and local government taxes, levies, and rates.",
          expanded: false
          },
          {
          question: "How are trusts taxed in Nigeria?",
          answer: "Trusts are taxed as separate entities. The trustees are assessed to tax on the income of the trust at the applicable personal income tax rates.",
          expanded: false
          },
          {
          question: "What is the tax implication of group relief in Nigeria?",
          answer: "Nigeria does not have group relief provisions. Each company within a group is treated as a separate entity for tax purposes.",
          expanded: false
          },
          {
          question: "How are stock dividends (bonus shares) treated for tax purposes in Nigeria?",
          answer: "Stock dividends or bonus shares are not subject to tax at the time of issuance. They may be subject to capital gains tax upon disposal of the shares.",
          expanded: false
          },
          {
          question: "What is the tax treatment of long-term contracts in Nigeria?",
          answer: "Long-term contracts are generally accounted for using the percentage of completion method for tax purposes.",
          expanded: false
          },
          {
          question: "How are partnerships taxed in Nigeria?",
          answer: "Partnerships are not taxed as entities. Instead, the partners are taxed individually on their share of the partnership income.",
          expanded: false
          },
          {
          question: "What is the tax treatment of bad debts in Nigeria?",
          answer: "Bad debts are tax-deductible if they are specific and have been proven to be irrecoverable.",
          expanded: false
          },
          {
          question: "How are foreign tax credits treated in Nigeria?",
          answer: "Nigeria provides relief for foreign taxes paid through tax credits, subject to the provisions of applicable double tax treaties.",
          expanded: false
          },
          {
          question: "What is the tax treatment of intellectual property rights in Nigeria?",
          answer: "Income from intellectual property rights is subject to withholding tax. The cost of acquiring intellectual property rights may be capitalized and amortized over time.",
          expanded: false
          },
          {
          question: "How are Islamic finance transactions taxed in Nigeria?",
          answer: "The Finance Act 2020 introduced provisions to ensure that Islamic finance transactions are taxed in a manner similar to conventional financial transactions.",
          expanded: false
          },
          {
          question: "What is the tax implication of debt forgiveness in Nigeria?",
          answer: "Debt forgiveness is generally treated as taxable income for the debtor, unless it qualifies for specific exemptions.",
          expanded: false
          },
          {
          question: "How are NGOs and charitable organizations taxed in Nigeria?",
          answer: "NGOs and charitable organizations are generally exempt from income tax, provided they are registered with the Corporate Affairs Commission and do not engage in commercial activities.",
          expanded: false
          },
          {
          question: "What is the tax treatment of employee share schemes in Nigeria?",
          answer: "Benefits derived from employee share schemes are generally treated as employment income and subject to personal income tax.",
          expanded: false
          },
          {
          question: "How are cryptocurrency transactions taxed in Nigeria?",
          answer: "As of 2024, there is no specific legislation on the taxation of cryptocurrency transactions in Nigeria. However, gains from such transactions may be subject to capital gains tax or income tax depending on the nature of the transaction.",
          expanded: false
          },
          {
          question: "What is the tax treatment of income from the digital economy in Nigeria?",
          answer: "The Finance Act 2019 introduced provisions to tax the digital economy, including imposing VAT on digital services provided to Nigerian customers.",
          expanded: false
          },
          {
            question: "What is the tax treatment of employee benefits in Nigeria?",
            answer: "Employee benefits are generally taxable as part of employment income. This includes benefits in kind, such as company cars, housing allowances, and other non-cash benefits. However, certain benefits like life insurance premiums and pension contributions are tax-exempt up to specified limits.",
            expanded: false
            },
            {
            question: "How does Nigeria's tax system address environmental concerns?",
            answer: "Nigeria has introduced some environmental taxes and incentives. For instance, there's a Green Bond initiative to finance environmentally friendly projects. Additionally, companies engaged in gas utilization projects in the upstream petroleum sector enjoy tax incentives, including a three-year tax holiday which is renewable for an additional two years.",
            expanded: false
            }
      ]
    }  ];

  filteredFaqData = [...this.faqData];
  searchTerm: string = '';

  constructor() {}

  toggleCategory(category: any) {
    category.expanded = !category.expanded;
  }

  toggleQuestion(question: any) {
    question.expanded = !question.expanded;
  }

  filterQuestions() {
    const lowercaseSearchTerm = this.searchTerm.toLowerCase().trim();
    if (lowercaseSearchTerm === '') {
      this.filteredFaqData = [...this.faqData];
    } else {
      this.filteredFaqData = this.faqData
        .map(category => ({
          ...category,
          questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(lowercaseSearchTerm)
          ),
        }))
        .filter(category =>
          category.title.toLowerCase().includes(lowercaseSearchTerm) || category.questions.length > 0
        );
    }
  }}