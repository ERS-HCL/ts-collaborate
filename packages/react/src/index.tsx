import * as React from 'react';
import { toSlug } from '@thefakeorg/utils';

export interface SlugProps {
  message: string; // message as a string
}

/**
 * Converts the input message to a slug
 * @param props
 */
export function Slug(props: SlugProps) {
  return <>{toSlug(props.message)}</>;
}

/**
 * Converts the input message to bold
 * @param param0
 */
export function Bold({ message }: { message: string }) {
  return <b>{message}</b>;
}

/**
 * Converts the input message to italics
 * @param param0
 */
export function Zop({ message }: { message: string }) {
  return <i>{message}</i>;
}
