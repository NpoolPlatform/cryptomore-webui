<template>
  <HeadBackground />
  <Title class='horizontal-center' :title='$t("MSG_PRIVACY_NOTICE")' :subtitle='$t("MSG_LAST_UPDATED", { DATE: new Date() })' />
  <div class='content-width row horizontal-center'>
    <div class='left' :style='{marginTop: tableOfContentMarginTop}'>
      <TableOfContent v-model:selected='selected' :entries='entries' />
    </div>
    <div class='right text-primary'>
      <q-scroll-observer @scroll='onScroll' />
      <p>Crypto More Ltd. ("Crypto More", "we", "us", or "our") we are a one-stop blockchain infrastructure and services provider. This Privacy Notice is designed to help you understand how we collect, use, process, and share your personal information, and to help you understand and exercise your privacy rights.</p>
      <h4 class='text-primary title title-1' id='About this privacy notice'>
        1. ABOUT THIS PRIVACY NOTICE
      </h4>
      <p>This Privacy Notice applies to personal information processed by us on our websites while providing services, and offerings (collectively described as the "Services"). Unless specifically described herein, this Privacy Notice does not apply to personal information that our customers provide in using our Services ("Customer Data"), which is instead governed by the customer's respective privacy policies regarding their collection and use of Customer Data. Our processing of Customer Data is governed by the contracts that we have in place with our customers, not this Privacy Notice. Any questions or requests relating to Customer Data should be directed to the relevant customer's legal or privacy team.</p>
      <p>Our business changes regularly, and our Privacy Notice may change also. You should check our websites frequently to see recent changes.</p>
      <h4 class='text-primary title title-1' id='Personal information we collect'>
        2. PERSONAL INFORMATION WE COLLECT
      </h4>
      <p>The categories of personal information we collect depend on how you interact with us, our Services, and the requirements of applicable law.</p>
      <p>We process the information that you provide to us, the information we obtain automatically when you use our Services, and information from other sources such as third-party services and organizations, as described below.</p>
      <h5 class='text-primary title title-2'>
        A. Personal Information You Provide to Us Directly
      </h5>
      <p>We may collect personal information that you provide to us, including the following as applicable:</p>
      <ul class='text-primary'>
        <li>
          <strong>Account Creation. We may collect personal information when you create an account, such as name, email address, username(s), and professional details.</strong>
        </li>
        <li>
          <strong>Purchases. We may collect personal information and details associated with your purchases, including payment information when you subscribe. Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment card information entered through our Services, but we may receive information associated with your payment (e.g., name, billing address).</strong>
        </li>
        <li>
          <strong>Your Communications with Us. We may collect personal information, such as email address, phone number, or mailing address when you request information about our Services, request customer or technical support, or otherwise communicate with us.</strong>
        </li>
        <li>
          <strong>Your Feedback. We may collect personal information from users when they participate in market research activities.</strong>
        </li>
        <li>
          <strong>Conferences, Trade Shows, and Other Events. We may collect personal information from individuals when we attend or host conferences, trade shows, hackathons, socials or happy hours, and other events.</strong>
        </li>
        <li>
          <strong>Business Development and Strategic Partnerships. We may collect personal information from individuals and third parties to assess and pursue potential business opportunities.</strong>
        </li>
        <li>
          <strong>Job Applications. We may post job openings and opportunities. If you apply and or respond to one of these postings, we may collect your personal information, such as your application, CV, cover letter, and/or any other information you provide to us.</strong>
        </li>
      </ul>
      <h5 class='text-primary title title-2'>
        B. Personal Information Collected Automatically
      </h5>
      <p>We may collect personal information automatically when you use our Services.</p>
      <ul>
        <li class='text-primary'>
          <strong>Automatic Collection of Personal Information. We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, cookie identifiers, and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider.</strong>
        </li>
        <li class='text-primary'>
          <strong>Cookie Policy & other similar Technologies.</strong>
          <p class='color-main-transparent-60'>
            We can place our cookies, third parties, and other similar technologies such as pixel tags on your device, including mobile devices, to automatically collect information through your use of our Services. your unique device identifier, mobile device IP address, information about your device's operating system, mobile carrier, and your location information (to the extent permissible under applicable law).
          </p>
          <p><strong>1) Cookies are small text files that are placed into the user's device when you visit a website, downloaded to your computer or mobile device when you visit a site, and allow a site to recognize your device. Cookies store information about the user's visit, which may include content viewed, language preference, time and duration of each visit, and advertisement accessed. Cookies managed by Crypto More only are called "first-party cookies" whereas cookies from third parties are called "third-party cookies".</strong></p>
          <p><strong>2) Pixel Tags/Web Beacons are a piece of code embedded in our Services that collects information about engagement on our Services. The use of a pixel tag allows us to record, for example, which particular web page a user has visited and which advertisement they have clicked.</strong></p>
          <p class='color-main-transparent-60'>
            Our uses of these Cookies fall into the following general categories:
          </p>
          <p class='color-main-transparent-60'>
            The cookies used on Crypto More sites have been categorized as per the table below. However, it is important to note that not all cookies may be used in all jurisdictions or websites. A list of the categories of cookies used on this website is set out below.
          </p>
          <table>
            <tr>
              <th><strong>Category</strong></th>
              <th><strong>Description</strong></th>
            </tr>
            <tr>
              <td><strong>Strictly Necessary cookies</strong></td>
              <td class='color-main-transparent-60'>
                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made that amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not work. These cookies do not store any personally identifiable information.
              </td>
            </tr>
            <tr>
              <td><strong>Performance cookies</strong></td>
              <td class='color-main-transparent-60'>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site and will not be able to monitor its performance.
              </td>
            </tr>
            <tr>
              <td><strong>Functionality cookies</strong></td>
              <td class='color-main-transparent-60'>
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by a third-party provider whose services we have added to our pages. If you don't allow these cookies some services may not function properly.
              </td>
            </tr>
            <tr>
              <td>Targeting cookies</td>
              <td class='color-main-transparent-60'>
                Targeting cookiesTargeting cookies may be set through our site by our advertising partners. They can be used by these third parties to build a profile of your interests based on the browsing information they collect from you, which includes uniquely identifying your browser and terminal equipment. If you do not allow these cookies you will still see basic advertising on your browser that is generic and not based on your interests.
              </td>
            </tr>
          </table>
          <p><strong>3) Functionality. We may use Cookies and other third-party tools to process functionality information on our Services. These Cookies allow us to better understand how our digital Services are used and to continually improve and personalize our Services. Some of our analytics partners include Google Analytics.</strong></p>
        </li>
      </ul>
      <h5 class='text-primary title title-2'>
        C. Personal Information Collected from Other Sources
      </h5>
      <p><strong class='text-primary'>Third-Party Services and Sources. We may obtain personal information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect personal information about you from that third-party application that you have made available via your privacy settings.</strong></p>
      <h4 class='text-primary title title-1' id='How we use your personal information'>
        3. HOW WE USE YOUR PERSONAL INFORMATION
      </h4>
      <p>We use your personal information for a variety of reasons, such as to provide our Services, for administrative purposes, and to market our products and Services. Below you might find more information about how we use your personal information you can see below.</p>
      <h5 class='text-primary title title-2'>
        A. Provide Our Services
      </h5>
      <p>We use your information to fulfill our contract with you and provide you with our Services, such as:</p>
      <ul>
        <li>
          Managing your information and accounts;
        </li>
        <li>
          Providing access to certain areas, functionalities, and features of our Services;
        </li>
        <li>
          Provide customer service and/ or technical support;
        </li>
        <li>
          Communicating with you about your account, activities on our Services, and policy changes;
        </li>
        <li>
          Processing your financial information and other payment methods for products or Services purchased;
        </li>
        <li>
          Processing applications if you apply for a job we post on our Services;
        </li>
        <li>
          Allowing you to register for educational programs or other events, offerings, programs, or communities.
        </li>
      </ul>
      <h5 class='text-primary title title-2'>
        B. Administrative Purposes
      </h5>
      <p>We use your information for various administrative purposes, such as:</p>
      <ul>
        <li>
          Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention;
        </li>
        <li>
          Detecting security incidents, protecting against malicious deceptive, fraudulent,or illegal activity, and prosecuting those responsible for that activity;
        </li>
        <li>
          Measuring interest and engagement in our Services;
        </li>
        <li>
          Improving, upgrading, or enhancing our Services;
        </li>
        <li>
          Developing new products and services;
        </li>
        <li>
          Ensuring internal quality control and safety;
        </li>
        <li>
          Authenticating and verifying individual identities, including requests to exercise your rights under this Privacy Notice;
        </li>
        <li>
          Debugging to identify and repair errors with our Services;
        </li>
        <li>
          Auditing relating to interactions, transactions, and other compliance activities;
        </li>
        <li>
          Sharing personal information with third parties as needed to provide the Services;
        </li>
        <li>
          Enforcing our agreements and policies;
        </li>
        <li>
          Carrying out activities that are required to comply with our legal obligations.
        </li>
      </ul>
      <h5 class='text-primary title title-2'>
        C. Marketing and Advertising our Products and Services
      </h5>
      <p>We may use personal information to tailor and provide you with content and advertisements. We may provide you with these materials as permitted by applicable law.</p>
      <p>If you have any questions about our marketing practices, you may contact us at any time as set forth in "Contact Us" below.</p>
      <h5 class='text-primary title title-2'>
        D. With Your Consent
      </h5>
      <p>We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent.</p>
      <h5 class='text-primary title title-2'>
        E. Other Purposes
      </h5>
      <p>We also use your personal information for other purposes as requested by you or as permitted by applicable law.</p>
      <h4 class='text-primary title title-1' id='Does crypto more share my personal information'>
        4. DOES CRYPTO MORE SHARE MY PERSONAL INFORMATION
      </h4>
      <p>We may share your Personal Information with third parties (including other Crypto More entities) if we believe that sharing your Personal Information is in accordance with, or required by, any contractual relationship with you or us, applicable law, regulation, or legal process. When sharing your Personal Information with other Crypto More entities, we will use our best endeavors to ensure that such entities are either subject to this Privacy Notice or follow practices at least as protective as those described in this Privacy Notice.</p>
      <p>We may also share personal information with the following persons:</p>
      <ul>
        <li>
          Third-party service providers: We employ other companies and individuals to perform functions on our behalf. Examples include analyzing data, providing marketing assistance, processing payments, transmitting content, and assessing and managing credit risk. These third-party service providers only have access to personal information needed to perform their functions, but may not use it for other purposes. Further, they must process the personal information in accordance with our contractual agreements and only as permitted by applicable data protection laws.
        </li>
        <li>
          Legal Authorities: We may be required by law or by Court to disclose certain information about you or any engagement we may have with you to relevant regulatory, law enforcement and/or other competent authorities. We will disclose information about you to legal authorities to the extent we are obliged to do so according to the law. We may also need to share your information in order to enforce or apply our legal rights or to prevent fraud.
        </li>
        <li>
          Business transfers: As we continue to develop our business, we might sell or buy other businesses or services. In such transactions, user information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Notice (unless, of course, the user consents otherwise). Also, in the unlikely event that Crypto More or substantially all of its assets are acquired by a third party, user information will be one of the transferred assets.
        </li>
        <li>
          Protection of Crypto More and others: We release accounts and other personal information when we believe release is appropriate to comply with the law or with our regulatory obligations; enforce or apply our Terms of Use and other agreements; or protect the rights, property,or safety of Crypto More, our users or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.
        </li>
      </ul>
      <h4 class='text-primary title title-1' id='Your privacy rights'>
        5. YOUR PRIVACY RIGHTS
      </h4>
      <p><strong class='text-primary'>Your Privacy Rights.</strong></p>
      <p>Subject to applicable law, as outlined below, you have a number of rights in relation to your privacy and the protection of your personal information. You have the right to request access to, correct, and delete your personal information, and to ask for data portability. You may also object to our processing of your personal information or ask that we restrict the processing of your personal information in certain instances. In addition, when you consent to our processing of your personal information for a specified purpose, you may withdraw your consent at any time. If you want to exercise any of your rights please contact us at support@cryptomore.io. These rights may be limited in some situations - for example, where we can demonstrate we have a legal requirement to process your personal data.</p>
      <ul>
        <li>
          Right to access: you have the right to obtain confirmation that your personal information is processed and to obtain a copy of it as well as certain information related to its processing;
        </li>
        <li>
          Right to rectify: you can request the rectification of your personal information which is inaccurate, and also add to it;
        </li>
        <li>
          Right to delete: you can, in some cases, have your personal information deleted;
        </li>
        <li>
          Right to object: you can object, for reasons relating to your particular situation, to the processing of your personal information. For instance, you have the right to object where we rely on legitimate interest or where we process your data for direct marketing purposes;
        </li>
        <li>
          Right to restrict processing: You have the right, in certain cases, to temporarily restrict the processing of your personal information by us, provided there are valid grounds for doing so. We may continue to process your personal information if it is necessary for the defense of legal claims, or for any other exceptions permitted by applicable law;
        </li>
        <li>
          Right to portability: in some cases, you can ask to receive your personal information which you have provided to us in a structured, commonly used and machine-readable format, or, when this is possible, that we communicate your personal information on your behalf directly to another data controller;
        </li>
        <li>
          Right to withdraw your consent: for processing requiring your consent, you have the right to withdraw your consent at any time. Exercising this right does not affect the lawfulness of the processing based on the consent given before the withdrawal of the latter;
        </li>
      </ul>
      <h4 class='text-primary title title-1' id='Security of your information'>
        6. SECURITY OF YOUR INFORMATION
      </h4>
      <p>We design our systems with your security and privacy in mind. We have appropriate security measures in place to prevent your information from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
      <p>We work to protect the security of your personal information during transmission and while stored by using encryption protocols and software. We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, and disclosure of your personal information. In addition, we limit access to your personal information to those employees, agents, contractors, and other third parties who have a business need to know.</p>
      <p>Our security procedures mean that we may ask you to verify your identity to protect you against unauthorized access to your account password.</p>
      <h4 class='text-primary title title-1' id='International transfers of personal information'>
        7. INTERNATIONAL TRANSFERS OF PERSONAL INFORMATION
      </h4>
      <p>To facilitate our global operations, all information processed by us may be transferred, processed, and stored in different places across the globe. We will do our best to safeguard your information consistent with the requirements of the applicable laws. If we transfer personal information which originates in the European Economic Area, Switzerland, and/or the United Kingdom to third countries or international organizations outside of the EEA to a country that has not been found to provide an adequate level of protection under applicable data protection laws, we will put in place suitable technical, organizational and contractual safeguards (including Standard Contractual Clauses), to ensure that such transfer is carried out in compliance with applicable data protection rules, except where the country to which the personal information is transferred has already been determined by the European Commission to provide an adequate level of protection.</p>
      <p>We also rely on decisions from the European Commission where they recognize that certain countries and territories outside of the European Economic Area ensure an adequate level of protection for personal information. These decisions are referred to as "adequacy decisions".</p>
      <h4 class='text-primary title title-1' id='How long dose crypto more retain my personal information'>
        8. HOW LONG DOES CRYPTO MORE RETAIN MY PERSONAL INFORMATION
      </h4>
      <p>We keep your personal information to enable your continued use of Crypto More Services, for as long as it is required in order to fulfill the relevant purposes described in this Privacy Notice, and as may be required by law such as for tax and accounting purposes, resolve disputes, establish legal defenses, pursue legitimate business purposes, and/or enforce our agreements.</p>
      <h4 class='text-primary title title-1' id='Children&lsquo;s information'>
        9. CHILDREN'S INFORMATION
      </h4>
      <p>The Services are not directed to children under 16 (or other ages as required by local law), and we do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has uploaded personal information to our site without your consent, you may contact us as described in "Contact Us" below.</p>
      <h4 class='text-primary title title-1' id='More information'>
        10. MORE INFORMATION
      </h4>
      <p><strong class='text-primary'>Third-Party Websites/Applications. The Services may contain links to other websites/applications and other websites/applications may reference or link to our Services. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen, or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk.</strong></p>
      <p><strong class='text-primary'>Supervisory Authority. We hope that we can satisfy any queries you may have about the way in which we process your personal information. However, if you have unresolved concerns, and your personal information is subject to the applicable data protection laws of the European Economic Area, Switzerland, or the United Kingdom, you have the right to lodge a complaint with the competent supervisory authority.</strong></p>
      <p>If you have any questions or objections as to how we collect and process your personal information, please contact support@cryptomore.io.</p>
      <h4 class='text-primary title title-1' id='About this privacy notice'>
        11. CONTACT US
      </h4>
      <p>Crypto More is the controller of the personal information we process under this Privacy Notice. If you have any questions about how we process your Personal Information or this Privacy Notice, or if you would like to exercise your rights as detailed in this Privacy Notice, please contact us at <span class='text-secondary'>support@cryptomore.io</span>.</p>
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

const selected = ref('About this privacy notice')
const entries = ref([
  'About this privacy notice',
  'Personal information we collect',
  'How we use your personal information',
  'Does crypto more share my personal information',
  'Your privacy rights',
  'Security of your information',
  'International transfers of personal information',
  'How long dose crypto more retain my personal information',
  'Children\'s information',
  'More information',
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
  font-size: 16px
  font-weight: 500
  line-height: 26px
  max-width: 950px
  margin-left: 40px
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
  th, td
    border-bottom: 1px solid $grey
</style>
