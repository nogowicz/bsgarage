'use client';
import React from 'react';
import Button from '../button/Button';
import Link from 'next/link';

export default function SeeMoreButton() {
  return (
    <Link href={`/projects`}>
      <Button text="Zobacz więcej" isBlack withArrow />
    </Link>
  );
}
