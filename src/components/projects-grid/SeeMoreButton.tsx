'use client';
import React from 'react';
import Button from '../button/Button';

export default function SeeMoreButton() {
  return (
    <Button
      text="Zobacz więcej"
      isBlack
      withArrow
      onClick={() => console.log('See more')}
    />
  );
}
