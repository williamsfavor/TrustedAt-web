import MarkdownRenderer from "@/components/legal/markdown";

export default function UserAgreementPage(){

    const content = `
# 1. Introduction

Welcome to TrustedAt. Your privacy is important to us. This policy outlines how we collect, use, share, and protect your personal information.

# 2. Information We Collect

Personal Data: Name, email, profile information, etc.
Usage Data: Device information, app interactions, IP address.
Audio & Media Content: Voice recordings, media uploads (with your consent).
Location Data: Only if location-sharing is enabled.

# 3. How We Use Your Information

To provide and improve the TrustedAt experience
To personalize content and suggest connections
To ensure safety, prevent fraud, and moderate content
To communicate updates, offers, and announcements

# 4. Sharing Your Data

With your consent
With service providers (e.g., hosting, analytics)
For legal or safety reasons (e.g., complying with laws)

# 5. Your Rights

You can:
Access, edit, or delete your profile
Request data export
Opt out of marketing emails
Control microphone and media permissions in-app

# 6. Data Security

We use encryption and access controls to safeguard your data.

# 7. Children’s Privacy

TrustedAt is not intended for users under 13 (or relevant age in your country).

# 8. Changes to This Policy

We may update this policy. You’ll be notified of significant changes via the app or email.

# 9. Contact Us

For privacy questions: support@trustedAt.app

    `;

    return(
        <>
         <div className="w-full flex flex-col">
            <h1 className="text-2xl md:text-[2.5em] font-extrabold text-gray-800">
               TrustedAt User Agreement
            </h1>
            <p className="text-gray-700">Effective January 4, 2021</p>

             <div className="mt-5 markdown">
                      <MarkdownRenderer markdownContent={content}></MarkdownRenderer>
                    </div>

        </div>
        </>
    )
}