# React Coding Test

The aim of this short test is to see how you code with react under pressure. We will be able to look at github to see when you forked this repo and when you finally submitted your solution. We expect this to take no more than an hour or so, but you should probably read through this repo thoroughly and ensure that you have your tools installed correctly before forking it.

The requirement is that you build an interactive react app that surfaces data from three REST services. This data represents `people`, their availability (`presence`) and some chat `messages` between them. These microservices are read-only - you aren't expected to build a fully functioning chat application.

You will present the data in two columns. On the left will be a list of people you have chatted with or can chat with, on the right a list of messages exchanged between you and the selected party in the left column. A bit like MS Teams or WhatsApp Desktop. Each person's name should be coloured according to their availability.

When a user clicks on a person in the left column, a list of messages should appear in the right column, also like WhatsApp and Teams, with the messages aligned left and right depending on the sender.

This is the basic layout showing the two columns with Person 1 selected. Obviously, we don't expect the UI to look like an ascii diagram, but the layout should be clear from this diagram.

```
     Contacts             Messages
------------------------------------------
| ________         | message 1           |
| Person 1         |                     |
| --------         |           message 2 |
| Person 2         |                     |
|                  |                     |
| Person 3         |           message 3 |
|                  |                     |
| Person 4         | message 4           |
|                  |                     |
------------------------------------------
```

## Code
The repo presented here should be forked and your answers/code uploaded to a public repo in your own github account.

There are two folders in the root of the repo, `services` and `chat`.
### Services (node/docker)
The `services` folder holds the microservices from which you will pull the data for the test. You will need to have docker installed (or docker desktop). There is a make file in the root of that folder and if you get into it in a linux shell (e.g. bash) then you can execute `make` to bring up the services and to shut them down again. 

There are 3 services, `people`, `presence`, and `messages`. They report the ports they're running on when you stand them up. Feel free to change the ports through the `docker-compose.yaml` file. Also, feel free to look at the source files to see what they return -- it's a simple json file. The 'person' id's are all consistent so the items in `presence` and `messages` should relate to the `people` list.

### Chat (react/docker)
The UI for the application is held in the `chat` folder. It is modern `react` with `jss` and shouldn't give you any trouble. Your own work should be under the `src` subfolder. Please use `jss` for styling.

## Timing
You are to spend no more than 1-2 hours on this task. Shorter times will earn higher levels of respect. However, please don't game the system. Commit regularly so that we can see a commit history that shows steady progress as proof that you're not cheating. If you start and finish within 2-minutes we'll know by the git and github logs.

## Expectations
We expect you to use modern `React`, with `hooks`, named and anonymous `fat-arrow functions` rather than `classes`, and `object destructuring`, `array spreading`, `async/await` and `chaining`. We also expect you to use `JSS` as the `css` generator -- let us know if you are already familiar with this library, if you're not then all the better because we'd like to see how you react to being forced to use an unfamiliar library.

We expect the data to be loaded asynchronously on demand, rather than all at once. We appreciate that the sample dataset is small, but you should pretend that it is large and filterable/pageable (even though it clearly isn't right now).

We also expect you to use modern css and html. The resulting should be responsive and accessible (through semantics and aria).

We expect your submission to be in js/jsx, not Typescript because we hate typescript.

Finally, we do not expect you to test your code. It's a trivial example and simple enough to eyeball so testing would be inappropriate and take too long. We don't want you to waste too much time on this test.

## System requirements
This test can probably be performed on any system with Docker installed.

### Windows 10/11:
Install WSL2 with Ubuntu (or your favourite GNU/Linux distro that supports bash) and then install docker desktop. Then, in GNU/Linux+bash install `make`. 

### Mac (OSX)
Though I haven't tested it on M1 Macs yet, this should work ok on OSX with Docker Desktop installed. Open a terminal and install `make` too. Don't be surprised if it doesn't work though, docker was designed for x86 64-bit linux machines and your machine may not fit any of those specs (yes, I know that Docker Inc. have released a version of Docker Desktop for M1 Macs, but given that this is less than 0.5% of the market and based on the number of issues raised about it on StackOverflow I don't think they've given it much love).

### GNU/Linux + bash
Well done, you've got an extra point for choosing the right OS/Laptop to start with. Install docker (`curl -sL https://get.docker.com | sh`). Install `make` and off you go.

## Problems
Feel free to use the normal github mechanisms for technical issue reporting and resolution, or if we have told you that a response is urgent then email us for quicker technical support.

If you're not familiar with docker and its causing you problems, then you really should be familiar with docker and it really shouldn't be causing you any problems. It's easy - install Docker or Docker Desktop and the `Makefile` will show you how to use it. We don't expect any tech-support calls based on your inability to use docker or to get docker or any of the other tech working on your machine -- knowing how to do this is entry-level stuff these days.

## Comprehension
If any of this doesn't make a lot of sense to you then sorry but in order to keep the test fair to everyone we're not going to elaborate any further unless you find something that truly needs fixing, like broken code or instructions that are simply incorrect.

## Submission
Just send us your github repo name. BitBucket is not acceptable, it must be github and it must be a public project.
