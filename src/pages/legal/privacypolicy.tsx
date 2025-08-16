import MarkdownRenderer from "@/components/legal/markdown";

export default function PrivacyPolicyPage() {

  const content = `
# 1.0 Introduction

As a transformative force in the social media industry, we specialize in providing
collaboration services across both mobile and web platforms. Our offerings are
embraced by a diverse audience—including students, tutors, influencers, recruiters,
corporations, and the public. By utilizing our services, these users generate positive
impact within their communities and professions worldwide, while upholding our
commitment to promoting cyber sanity.
Registered users, also referred to as &quot;Members,&quot; gain access to a personalized timeline
showcasing discussions and posts from their connections, alongside content tailored to
their specific interests. They also enjoy a multitude of features and functionalities,
engaging in discussions through comments, replies, likes, and various other forms of
social interaction

- Respond to quizzes.
- Invite expert contribution to their questions or challenges.
- Access career opportunities.
- Get assessment or endorsement on various skills.
- Attend live online engagements.
- Create groups.
- Engage in group or one-on-one real-time chats.
- And many other Services in the category of UGC.

# 1.2 Changes or Updates

Any changes to this Privacy Policy will take effect on the "effective date." TrustedAt reserves the right to modify this Privacy Policy. If we implement significant changes, we will notify you through our Services or by other means, allowing you the opportunity to review the changes before they become effective. If you disagree with any of the changes, you have the option to close your account.
By acknowledging this, you understand that your continued use of our Services after we publish or send a notice about updates to this Privacy Policy means that the collection, use, and sharing of your personal data will be governed by the updated Privacy Policy as of its effective date.

# 2.0 How we collect your data

# 2.1 Data that you provide to us

To become a registered user (“Member”), there is some data you will need to provide to us so that an account is created with your profile.

# 2.2 Registration

To set up an account, you are required to provide certain information, including your name, email address and/or mobile number, and a password. If you choose to register for a premium service, you'll need to furnish payment details (e.g., credit card) and billing information. Completing a full TrustedAt profile enables you to maximize the benefits of our Services.

# 2.3 Profile

You can customize the information displayed on your profile, including your educational background, employment history, skills, profile picture, location, and endorsements. By providing comprehensive profile details, you enhance your interaction with our platform. This enables professionals to better understand your preferences and offer relevant guidance; while also helping you connect with potential job opportunities. The choice to disclose sensitive information on your profile and make it visible to others is entirely yours. We recommend refraining from sharing personal data that you wish to keep confidential. Additionally, you have the option to grant us access to extra information—such as your contact list or calendar—to further enhance your overall user experience.

# 2.4 Posting and Uploading Data

Personal data is collected from users when they provide, post, or upload it to our Services. This includes filling out forms with demographic data or salary information, responding to surveys, submitting resumes or job applications, and importing address books. If users choose to sync their contacts or calendars with our Services, we will collect their address book and calendar meeting information to suggest connections and provide event details. Users who do not post or upload personal data may be at a disadvantage in growing and engaging with their network on our Services.

# 2.5 Data provided by others

This platform allows users to generate content, where individuals can share information about themselves through posts, comments, and videos. Additionally, we may gather public information regarding users, such as professional news and achievements, and present it on our platform. This information may be shared with others through notifications, depending on the user's settings.

# 2.6 Contact and Calendar Information

We receive personal data (including contact information) about you when others import or sync their contacts or calendar with our Services, associate their contacts with Member profiles, scan, and upload business cards, or send messages using our Services (including invites or connection requests). If you or others opt-in to sync email accounts with our Services, we will also collect “email header” information that we can associate with Member profiles. Customers and other partners may provide data to us.

  `;


  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-2xl md:text-[2.5em] font-extrabold text-gray-800">
          Cookie Policy
        </h1>
        <p className="text-gray-700">Effective January 4, 2021</p>


        <div className="mt-5 markdown">
          <MarkdownRenderer markdownContent={content}></MarkdownRenderer>
        </div>
      </div>
    </>
  );
}
