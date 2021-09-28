import type { EdgeRequest, EdgeResponse } from 'next'
import { setBucket } from '@lib/ab-testing'
import { HOME_BUCKETS } from '@lib/buckets'

export default function middleware(req: EdgeRequest, res: EdgeResponse) {
  // Get and set the bucket cookie
  const bucket = setBucket(req, res, HOME_BUCKETS, 'bucket-home')

  // rewrite to the assigned bucket
  res.rewrite(`/home/${bucket}`)
}