
import {
    Html,
    Head,
    Body,
    Container,
    Text,
    Heading,
    Section,
    Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                background: "#12140c",
                                primary: "#c6f174",
                                accent: "#00fe66",
                                surface: "#1a1d14",
                                border: "#33362c",
                                "on-surface": "#e2e4d6",
                                "on-surface-variant": "#c4c9b4",
                            },
                        },
                    },
                }}
            >
                <Body className="bg-[#12140c] font-sans py-12">
                    <Container className="bg-[#1a1d14] border border-solid border-[#33362c] rounded-2xl p-10 max-w-[600px]">
                        <Heading className="text-[#c6f174] text-2xl font-bold mb-8 tracking-tight">
                            Nuevo mensaje de contacto
                        </Heading>

                        <Section className="mb-6">
                            <Text className="text-[#c4c9b4] text-[10px] uppercase font-bold tracking-[0.1em] mb-1">Nombre completo</Text>
                            <Text className="text-white text-lg font-medium m-0">{name || 'Sin nombre'}</Text>
                        </Section>

                        <Section className="mb-6">
                            <Text className="text-[#c4c9b4] text-[10px] uppercase font-bold tracking-[0.1em] mb-1">Email</Text>
                            <Text className="text-white text-lg font-medium m-0">{email || 'Sin email'}</Text>
                        </Section>

                        <Section className="mb-6">
                            <Text className="text-[#c4c9b4] text-[10px] uppercase font-bold tracking-[0.1em] mb-1">Asunto</Text>
                            <Text className="text-white text-lg font-medium m-0">{subject || 'Sin asunto'}</Text>
                        </Section>

                        <Hr className="border-[#33362c] my-8" />

                        <Section>
                            <Text className="text-[#c4c9b4] text-[10px] uppercase font-bold tracking-[0.1em] mb-4">Mensaje</Text>
                            <Section className="bg-[#12140c] border border-solid border-[#33362c] p-6 rounded-xl">
                                <Text className="text-[#e2e4d6] text-base leading-relaxed m-0 whitespace-pre-wrap">
                                    {message || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                                </Text>
                            </Section>
                        </Section>

                        <Section className="mt-12 text-center">
                            <Text className="text-[#444939] text-[11px]">
                                Este correo fue enviado desde el formulario de contacto de MarWare Portfolio.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}