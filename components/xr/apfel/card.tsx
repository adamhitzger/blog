import { ContainerRef, Container, ContainerProperties, DefaultProperties } from '@react-three/uikit'
import React, { forwardRef } from 'react'
import { GlassMaterial, colors } from "./theme"

export type CardProperties = ContainerProperties

export const Card = forwardRef<ContainerRef, CardProperties>(
  ({ children, ...props }, ref) => {
    return (
      <Container
        backgroundColor={colors.card}
        backgroundOpacity={0.8}
        borderColor={colors.card}
        borderOpacity={0}
        borderWidth={4}
        borderBend={0.3}
        panelMaterialClass={GlassMaterial}
        borderRadius={32}
        ref={ref}
        {...props}
      >
        <DefaultProperties color={colors.cardForeground}>{children}</DefaultProperties>
      </Container>
    );
  }
);

Card.displayName = "Card";
