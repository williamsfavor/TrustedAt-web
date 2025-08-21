import LegalDocument from "@/components/legal/legaldocument";
// [ "cookie_policy", "child_safety_standard_policy", "trusted_at_ethical_code", "user_agreement", "privacy_policy" ]

export default function EthicalCodePage(){

    return ( <LegalDocument policyKey="trusted_at_ethical_code" />);
}