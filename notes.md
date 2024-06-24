# On This File

Just a list of notes on things that I'm learning while I'm learning them, more
or less.

# Quickstart

The node:http quickstart docs were relatively straightforward, and after I
played around I realize that it was telling me most of what I had already
learned by introspection/playing around.


2024-06-24 09:24:41
===================

es6 and beyond has some interesting bits,`--v8-options` piped into `less` sure
has a lot of information. `maglev` is an interesting moniker, probably is
something that goes fast man? There's some allocation flags that look like they
might be interesting. Also some heap & trace flags.


2024-06-24 09:30:09
===================

Some wasm flags; also pretty interesting, mainly because I know of a lot of
things that can (right or wrong) live in the browser's Javascript.

    node -p process.versions.v8  # shows us the version of v8 that ships with this node


2024-06-24 09:43:28
===================

Looks like `NODE_ENV=production` is required for a lot of libs.

    if (process.env.NODE_ENV === 'development') { }

is a pretty popular pattern. Or `s/devevelopment/production. Or

    if (['production', 'staging'].includes(process.env.NODE_ENV)){}
    
I guess another popular one for Express (web server?) is:

    if (process.env.NODE_ENV === 'devlopment') {
        app.use(express.errorHandler({ dumpExceptions: true, showStack:
        true}));
    }

    if (process.env.NODE_ENV === 'production') {
        app.use(express.errorHandler());
    }




2024-06-24 09:48:11
===================

Ah, TypeScript; a very good Javascript? My favorite besides vanilla.js

Let's give that a shot in ts.ts


2024-06-24 11:24:14
===================

That mostly worked, but there was a blerp with my machine, had to reboot.


2024-06-24 11:44:30
===================

    npx tsc ts.ts && node ts.js

This is a good command for compiling and running. There's probably a better way
I don't know about yet. Could put something in the npm run, but not sure?


2024-06-24 12:04:45
===================

Tutorial recommends ts-node, and suggests tsc before shipping, but maybe...
well heck, on my chromebook, `npx ts-node ts.ts` takes 5s, while `npx tsc ts.ts
&& node ts.ts` takes 14s. So that's probably a bit faster to just run

    npx ts-node ts.ts

as opposed to

    npx tsc ts.ts && node ts.js

Let's see... if I put the `npx ts-node ts.ts` in my scripts it runs in 6s. So
it looks like that adds a second to the time (or 1/5th, on a faster compy?).

Not too bad.


2024-06-24 12:19:23
===================

Okay, the next bit is about webassembly, which may not be relevant to me since
I don't (currently) plan on wasm shenanigans...

Yeah, I'm going to skip that one for now. But good to know it exists.


2024-06-24 12:21:05
===================

On debugging; local apps can access debugger with no restriction, so that's
good to know. At the moment, it looks like you just access the debugger via
websockets. Locally do we have to launch a separate process?


2024-06-24 13:06:10
===================

Debugger is somewhat interesting. next/step/run is pretty reasonable though I
don't know how to "continue" like pdb, yet.



2024-06-24 13:10:23
===================

Interesting - it says `node debug script_name.js` should do a thing, but on
mine it says module not found. For a built-in debugger that's odd.


2024-06-24 13:14:11
===================

Profiling time? Well, gonna need to add express as a dep I'm sure. I wonder how
big of a download that is. Oh, I forgot I can use `--no-save`


2024-06-24 13:27:21
===================

Okay - let's try `NODE_ENV=production node --prof profile.js`


2024-06-24 13:37:04
===================

Well, that's an incomplete example. Needs 

    let crypto = require('node:crypto');
    let users = {};

at the top of the thing.


2024-06-24 17:39:03
===================

Well, this is interesting. After a break - the sample says that 97% happens in
C++, while in my summary 74% happens in shared libs

Most of my time happens in /usr/lib/libcrypto.so.3 -- almost nothing in any
other part.

But it is internal/crypto/pbkdf2. Fun!
