<template>
  <HeadBackground />
  <Title class='horizontal-center' :title='$t("MSG_AGREEMENT_TO_TERMS")' :subtitle='$t("MSG_LAST_UPDATED", { DATE: new Date() })' />
  <div class='content-width row horizontal-center'>
    <div class='left' :style='{marginTop: tableOfContentMarginTop}'>
      <TableOfContent v-model:selected='selected' :entries='entries' />
    </div>
    <div class='right text-primary'>
      <q-scroll-observer @scroll='onScroll' />
      <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you" or "User") and, CRYPTO MORE LTD. ("Crypto More," "we," "us," or "our"), concerning your access to and use of the https://cryptomore.io/ website (the "Site") as well as any other media form, media channel, mobile website digital service, Validator Services, Direct Route transaction services, Meganode service or mobile application related, linked, or otherwise connected thereto or provided by us (collectively, the "Services"). You agree that by accessing the Site or using any of the Services, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ANY OR ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY. The information provided on the Site and our Services are not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site or Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. Our Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use our Services or our Site.</p>
      <h4 class='text-primary title title-1' id='Registration and Account'>
        Registration and Account
      </h4>
      <h5 class='text-primary title title-2'>
        Register Qualification
      </h5>
      <p>You confirm, that you should be the legal person, corporation or other organization with full capacity of conduct and civil rights while finishing the registering process or actually use the Term by the methods we are allowable. If not, you or your guardian should undertake all consequences. We have the right to log off or permanently suspend your account and ask for compensation.</p>
      <h5 class='text-primary title title-2'>
        Registration and Account
      </h5>
      <p>When you have completed all registering steps following the registering page's notifications to fill in the information or read and agree with this Term, or you fill the information, read and agree with this Term following with activate page's notifications, or you use this Term by other methods we permit, it will be treated as you are bound by this Term. You can use the email address, phone number, or other methods we permit as the means of signing in to Crypto More. If the information you provided as the registration is not correct, we will not undertake any responsibilities. And you will suffer any direct or indirect losses and adverse consequences.</p>
      <h5 class='text-primary title title-2'>
        User Information
      </h5>
      <p>After registration or activation, you should follow the laws and regulations to provide and update your information on time correctly according to the page reminder, to make it authentic, timely, complete, and accurate. If we have a rational reason to suspect the error, inauthenticity, out of date or incomplete data of your provided information, we have the right of sending the inquiry or request you to amend, or directly delete the related information, even suspend or shut down to provide part of or all services. We will not undertake any responsibilities. And you will suffer any direct or indirect losses and adverse consequences. You should fill in and update the email address information you provided for the convenience of efficient contact from us to you. If we cannot contact you through these, which lead to any losses or increasing fees, you should suffer them completely. You have acknowledged and agreed, you must keep your contact information available, if any modifications or updates are needed, you should follow our requirements to operate.</p>
      <h5 class='text-primary title title-2'>
        Account Security
      </h5>
      <p>You must be responsible for the confidentiality of your username and password, and all activities (including but not limited to information disclosure and posting, online click to agree or submit various rules and agreements, online agreement renewal or purchasing services, account settings, etc.) occurred under your username, Crypto More nickname and password. You agree:</p>
      <p>(a) If anyone uses your Crypto More nickname and password without authentication, or any other situations that violate the secrecy rules. You will inform us immediately.</p>
      <p>(b) Ensure that you will strictly adhere to the web/services' security, authentication, configuration, and operation strategies or procedure.</p>
      <p>(c) Ensure that you leave our website/services in the right steps for finishing every online period. We cannot and will not be responsible for any of your losses due to your violating the Term. You will comprehend that it needs reasonable time for us to take action according to your requirement. We will not undertake any responsibilities for the consequences (including but not limited to any of your losses) that occurred before we take action.</p>
      <h4 class='text-primary title title-1' id='Description of Our Services'>
        Description of Our Services
      </h4>
      <p>Crypto More is a start-up company whose vision is to become a full-fledged blockchain infrastructure platform that combines node infrastructure, staking, and dApp support. Our goal is to make developing, staking, and trading more efficient on EVM blockchains. Crypto More’s business model includes several components such as monetizing idle resources from world-class data centers and providing blockchain Node hosting solutions. Crypto More will provide developers with the ability to deploy multiple types of blockchain Node via our node hosting application, which is available in the app store on the MegaNode platform. We focus on enabling blockchain communities to develop and stake in us. We provide service as agreed Service Level Agreement with You, as our individual client, with higher resilience and minimized latency.</p>
      <h4 class='text-primary title title-1' id='Updates, Amendments, Changes to Terms'>
        Updates, Amendments, Changes to Terms
      </h4>
      <p>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</p>
      <h4 class='text-primary title title-1' id='Fees and Payment'>
        Fees and Payment
      </h4>
      <ul>
        <li>
          Some Services, including paid Services up to a certain use threshold, may be offered to the public and licensed on a royalty-free basis.
        </li>
        <li>
          Unless otherwise specified in an order form for Services, to the extent a Service incurs fees, we calculate and bill fees and charges monthly according to your Plan or as otherwise advertised and charged on the Service If you make any other changes to the Services during a billing period (e.g. upgrading or downgrading your Selected Plan), we will apply any additional charges or credits to the next billing period. We may bill you more frequently for Fees accrued if we suspect that your account is fraudulent or at risk of non-payment.
        </li>
        <li>
          The customer agrees to keep a valid payment card or cryptocurrency wallet on file with Crypto More. If the Customer's payment card expires or its cryptocurrency wallet is depleted, the Customer must notify Crypto More immediately.
        </li>
      </ul>
      <h4 class='text-primary title title-1' id='Suspension'>
        Suspension
      </h4>
      <p>Crypto More may suspend the Customer's access to the Platform if we are unable to process any payment due to an expired or invalid payment card or a depleted cryptocurrency wallet. Crypto More will use commercially reasonable efforts to notify Customer and provide Customer an opportunity to provide updated payment information prior to suspending access. If applicable to a particular Service, we retain sole discretion to limit your usage of the Services (including without limitation by limiting the number of API requests you may submit ("API Requests")) at any time if your usage of the Services exceeds the applicable Threshold for your Selected Plan of Service.</p>
      <p>Furthermore, we may suspend Your right to access or use any portion or all of the Services immediately upon notice to you if we determine:</p>
      <p>(a) your use of the Services (i) poses a security risk to the Services or any third party, (ii) could adversely impact our systems, the Services, or the systems of any other user, (iii) could subject us, our affiliates, or any third party to liability, or (iv) could be fraudulent;</p>
      <p>(b) you are in breach of this Agreement;</p>
      <p>(c) for entities, you have ceased to operate in the ordinary course, made an assignment for the benefit of creditors or similar disposition of your assets, or become the subject of any bankruptcy, reorganization, liquidation, dissolution, or similar proceeding.</p>
      <p>We may change or discontinue any or all of the Services or change or remove functionality of any or all of the Services from time to time. We will notify you of any material change to or discontinuation of the Services. For any discontinuation of or material change to a Service, we will use commercially reasonable efforts to continue supporting the previous version of the Service for three months after the change or discontinuation (except if doing so (a) would pose a security or intellectual property issue, (b) is economically or technically burdensome, or (c) would cause us to violate the law or requests of governmental entities).</p>
      <h4 class='text-primary title title-1' id='Your Responsibilities'>
        Your Responsibilities
      </h4>
      <p>Customer is responsible for all activity occurring under Customer's accounts, and for complying with all laws and regulations applicable to Customer's use of the Service. Customer also must (a) notify Crypto More promptly upon becoming aware of any unauthorized use of any Customer password or account (or any other breach of security of the Service), and (b) notify Crypto More promptly upon becoming aware of, and make a reasonable effort to stop, any unauthorized copying, distribution or misuse of any aspect of the Service.</p>
      <h4 class='text-primary title title-1' id='Privacy'>
        Privacy
      </h4>
      <p>We collect information that you provide to us, the information we obtain automatically when you use our Services, and the information from other sources such as third-party services and organizations, as described below.</p>
      <p><strong class='text-primary'>Personal Information You Provide to Us Directly.</strong> We may collect personal information that you provide to us, including the following as applicable:</p>
      <ul>
        <li>
          Account Creation. We may collect personal information when you create an account, such as your email address.
        </li>
        <li>
          Purchases. We may collect personal information and details associated with your purchases, including payment information. Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment card information entered through our Services, but we may receive information associated with your payment (e.g., name, billing address).
        </li>
        <li>
          Feedback and correspondence. You may provide your information in your responses to surveys when you participate in market research activities, report a problem with Service, receive customer support, or otherwise correspond with us.
        </li>
        <li>
          Interactive Features. We and others who use our Services may collect personal information that you submit or make available through our interactive features (e.g., commenting functionalities, blogs, and social media pages). Any information you provide using the public sharing features of the Services will be considered "public," unless otherwise required by applicable law, and is not subject to the privacy protections referenced herein.
        </li>
        <li>
          Business Development and Strategic Partnerships. We may collect personal information from individuals and third parties to assess and pursue potential business opportunities.
        </li>
        <li>
          Job Applications. We may post job openings and opportunities. If you respond to one of these postings, we may collect your personal information, such as your application, CV, cover letter, and/or any other information you provide to us.
        </li>
      </ul>
      <p><strong class='text-primary'>Information Automatically Collected.We may automatically record certain information about how you use our Sites (we refer to this information as "Log Data"). Log Data may include information such as a user's Internet Protocol (IP) address, device and browser type, operating system, the pages or features of our Sites to which a user browsed and the time spent on those pages or features, the frequency with which the Sites are used by a user, search terms, the links on our Sites that a user clicked on or used, and other statistics. We use this information to administer the Service and we analyze (and may engage third parties to analyze) this information to improve and enhance the Service by expanding its features and functionality and tailoring it to our users' needs and preferences.</strong></p>
      <p>We may use cookies, local storage, or similar technologies to analyze trends, administer the Sites, track users' movements around the Sites, and gather demographic information about our user base as a whole. Users can control the use of cookies and local storage at the individual browser level. For more information, please see our Cookies Policy.</p>
      <p>We also may use Google Analytics to help us offer you an optimized user experience. You can find more information about Google Analytics' use of your personal data here: https://www.google.com/analytics/terms/us.html. Please note that Metamask does not use Google Analytics in its wallet.</p>
      <p><strong class='text-primary'>Third-Party Services and Sources.We may obtain personal information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect personal information about you from that third-party application that you have made available via your privacy settings.</strong></p>
      <h4 class='text-primary title title-1' id='Term and Termination'>
        Term and Termination
      </h4>
      <p>These Terms of Use shall remain in full force and effect while you use the Site or Services.</p>
      <p>Either party may terminate these Terms of Use for cause if the other party is in material breach of these Terms of Use and the material breach remains uncured for 30 days from receipt of notice by the other party.</p>
      <p>(We may also terminate these Terms of Use immediately upon notice to you (A) for cause if we have the right to suspend, (B) if our relationship with a third-party partner who provides software or other technology we use to provide the Services expires, terminates or requires us to change the way we provide the software or other technology as part of the Services, or (C) in order to comply with the law or requests of governmental entities.</p>
      <p>If we terminate or suspend your access to our Site or Services for any reason, you are prohibited from registering or accessing them in any other manner. In addition to terminating or suspending your access to our Services and Site, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
      <h4 class='text-primary title title-1' id='Intellectual Property'>
        Intellectual Property
      </h4>
      <p>The technology and content used to offer, or provided in connection with, our Platform and Website, including the software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof, are exclusively owned by Crypto More Inc., its licensors or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
      <h4 class='text-primary title title-1' id='Representations and Warranties'>
        Representations and Warranties
      </h4>
      <p>Crypto More makes no warranty that: (1) The Website or content will meet the Customer's requirements; (2) The Website will be available on an uninterrupted, timely, secure, or error-free basis; (3) The results that may be obtained from the use of the Website or any content provided on or through the Website will be accurate or reliable; or (4) the quality of any content purchased or obtained by Customer on or through the Website will meet Customer's expectations. Additionally, Customer represents and warrants to Crypto More that (a) Customer has obtained and shall obtain all necessary rights and consents to provide Crypto More with the Customer Data including, with respect to any personal information contained therein, the express consent from any applicable individuals to disclose and transfer such information to Crypto More for the purposes contemplated herein, and (b) that the Customer Data and the Nodes do not and shall not infringe, misappropriate, or otherwise violate the rights of any third party including, without limitation, intellectual property rights.</p>
      <h4 class='text-primary title title-1' id='Submissions'>
        Submissions
      </h4>
      <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Services ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</p>
      <h4 class='text-primary title title-1' id='Site and Services Management'>
        Site and Services Management
      </h4>
      <p>We reserve the right, but not the obligation, to (1) monitor the Site and Services for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) otherwise manage the Site and Services in a manner designed to protect our rights and property and to facilitate their proper functioning.</p>
      <h4 class='text-primary title title-1' id='Corrections'>
        Corrections
      </h4>
      <p>There may have information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</p>
      <h4 class='text-primary title title-1' id='Disclaimer'>
        Disclaimer
      </h4>
      <p>THE SITE AND SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE OR SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE OR SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE OR TO YOU BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>
      <h4 class='text-primary title title-1' id='Limitations of Liability'>
        Limitations of Liability
      </h4>
      <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, INCLUDING A SHARE OF OUR FEES COLLECTED FROM YOU PROPORTIONATE TO THE AMOUNTS YOU STAKE OR DELEGATE THROUGH US, BY YOU TO US DURING THE THREE (3) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>
      <h4 class='text-primary title title-1' id='Indemnification'>
        Indemnification
      </h4>
      <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of (1) use of the Site or Services; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site or Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>
      <h4 class='text-primary title title-1' id='Miscellaneous'>
        Miscellaneous
      </h4>
      <p>These Terms of Use and any policies or operating rules posted by us on the Site or with respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Terms of Use or use of the Site or Services. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.</p>
      <h4 class='text-primary title title-1' id='Definitions'>
        Definitions
      </h4>
      <p><strong class='text-primary'>"As A Service" means any individual or bundle of software, protocol, codebase, digital product, tool, or service that is provided remotely via a network (specifically, the internet) rather than hosted locally at the User's (or the User's agent's) physical premises."Blockchain" means a distributed digital ledger that is not under the control of a single identifiable or discreet individual or entity and where accounts (including units of account contained in them) cannot be manipulated without providing a user's specific private key. This may be a "main net" used as a determinative record of historical events and transactions on the ledger, or a "test net" which operates like a main net but does not have a Cryptocurrency that carries substantial real-world value and is generally used for simulated or testing purposes.For the purposes of this Terms of Use, "Blockchain" includes, but is not limited to, the following distributed digital ledgers (both related main nets and test nets): Ethereum, Cosmos, Iris, Loom, Terra, Polkadot, Solana, Skale, and Oasis."Cryptocurrency" or "Cryptocurrencies" means a unit(s) of account that is tracked by a Blockchain."Delegate" means support a Validator Node to be one charged with maintaining (in collaboration) the operation and authenticity of a Blockchain."Designate" means to signal to a Blockchain a certain communication or intention, including designating Cryptocurrencies as supporting a certain node as a Validator Node for the network."User Data" means all data, files and information that User provides to Crypto More in the course of using the Services."User Funds" means the Cryptocurrencies controlled by User or delegated to Crypto More control but ultimately belonging to User."Slashing Penalty" means any penalty assessed by a Blockchain, either automatically by predefined parameters or accepted by consensus of controllers of the Blockchain, in Cryptocurrency for unavailability or slow, incorrect or malicious performance or for other behaviors penalized by the network."Staking" or "to Stake" means committing Cryptocurrency holdings as a guarantee or bid of what is believed to be the correct operation or information."Validator Node" means a collection of server hardware and software required to maintain a current copy of the Blockchain for a Cryptocurrency and/or to produce and/or to validate new transactions as bundled into blocks."Validator Node Services" means a Validator Node operated by Crypto More As-A-Service on a User's behalf."Validator Rewards" means all Cryptocurrency generated by operating Validator Nodes, including, but not limited to, block rewards, endorser rewards, transaction fees and any other direct payments as a result of operating a Validator Node."API" means an application program interface."API Request" has the meaning limitation by limiting the number of API requests you may submit"Suggestions" means all suggested improvements to the Service Offerings that you provide to us.</strong></p>
      <h4 class='text-primary title title-1' id='Contact Us'>
        Contact Us
      </h4>
      <p>In order to resolve a complaint regarding the Site or Services or to receive further information regarding the use of the Site or for Services, please contact us at:</p>
      <p>Crypto More Email: support@cryptomore.io</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, watch, computed } from 'vue'
import { scroll } from 'quasar'

const { getScrollTarget, setVerticalScrollPosition } = scroll

const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const Title = defineAsyncComponent(() => import('src/components/common/Title1.vue'))
const TableOfContent = defineAsyncComponent(() => import('src/components/agreement/TableOfContent.vue'))

const selected = ref('Registration and Account')
const entries = ref([
  'Registration and Account',
  'Description of Our Services',
  'Updates, Amendments, Changes to Terms',
  'Fees and Payment',
  'Suspension',
  'Your Responsibilities',
  'Privacy',
  'Term and Termination',
  'Intellectual Property',
  'Representations and Warranties',
  'Submissions',
  'Site and Services Management',
  'Corrections',
  'Disclaimer',
  'Limitations of Liability',
  'Indemnification',
  'Miscellaneous',
  'Definitions',
  'Contact Us'
])

watch(selected, () => {
  const el = document.getElementById(selected.value)
  if (!el) {
    return
  }
  const target = getScrollTarget(el)
  const offset = el.offsetTop - el.scrollHeight
  const duration = 1000
  setVerticalScrollPosition(target, offset, duration)
})

const scrollDistance = ref(0)
const tableOfContentMarginTop = computed(() => {
  const fixedVal = 400
  if (scrollDistance.value <= fixedVal) {
    return
  }
  return (scrollDistance.value - fixedVal).toFixed(0) + 'px'
})

const onScroll = (ev: unknown) => {
  const _ev = ev as Record<string, unknown>
  if (!_ev.position) {
    return
  }
  const pos = _ev.position as Record<string, number>
  scrollDistance.value = Number(pos.top)
}

</script>

<style lang='sass' scoped>
.left
  width: 278px
  @media (max-width: 1280px)
    display: none

.right
  margin-left: 40px
  font-size: 16px
  font-weight: 500
  line-height: 26px
  max-width: 950px
  color: rgba(0, 71, 55, 0.6) !important
  padding-bottom: 120px
  @media (max-width: 1280px)
    margin-left: 6px
    margin-right: 6px
    max-width: 100%
  .title
    font-weight: 700
    line-height: 32px
  .title-1
    font-size: 24px
  .title-2
    font-size: 16px
</style>
