# React Coding Test

The aim of this short test is to see your abilities with react. We will be able to look at github to see when you forked this repo and when you finally submitted your solution. We expect this to take no more than an hour, but you should probably read through this repo thoroughly before cloning it.

The requirement is that you build an interactive react app that surfaces data from three REST services. This data represents people, their availability (presence) and some chat messages between them. These microservices are read-only - you aren't expected to build a fully functioning chat application.

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

### Code
The repo presented here should be forked and your answers/code uploaded to a public repo in your own github account.

#### Services (node/docker)
There are two folders in the root. The `services` folder holds the microservices from which you will pull the data for the test. You will need to have docker installed (or docker desktop). There is a make file in the root of that folder and if you get into it in a linux shell (e.g. bash) then you can execute `make` to bring up the services and to shut them down again. 

There are 3 services, `people`, `presence`, and `messages`. They report the ports they're running on when you stand them up. Feel free to change the ports through the `docker-compose.yaml` file. Also, feel free to look at the source files to see what they return -- it's a simple json file. The 'person' id's are all consistent so the items in `presence` and `messages` should relate to the `people` list.

#### Chat (react/docker)
The UI for the application is held in the `chat` folder. It is modern react with jss and shouldn't give you any trouble. Your own work should be under the `src` subfolder. Please use jss for styling.

### Timing
You are to spend no more than 1-hour on this task.

### Expectations
We expect you to use modern React, with hooks, fat-arrow functions rather than classes, and object destructuring. We also expect you to use JSS as the css generator -- let us know if you are already familiar with this library, if you're not then all the better because we'd like to see how you react to being forced to use an unfamiliar library.

We also expect you to use modern css and html. The resulting should be responsive and accessible (through semantics and aria).

### System requirements
This test can probably be performed on any system with Docker installed.

#### Windows 10/11:
Install WSL2 with Ubuntu (or your favourite GNU/Linux distro that supports bash) and then install docker desktop. Then, in GNU/Linux+bash install `make`. 

Mac (OSX)
Though I haven't tested it on M1 Macs yet, this should work ok on OSX with Docker Desktop installed. Open a terminal and install `make` too. Don't be suprised if it doesn't work though -- you should have bought a professional laptop rather than a poser's laptop.

GNU/Linux + bash
Well done, you've got an extra point for choosing the right OS/Laptop to start with. Install docker (`curl -sL https://get.docker.com | sh`). Install `make` and off you go.

### Problems
Feel free to use the normal github mechanisms for technical issue reporting and resolution, or if we have told you that a response is urgent then email us for quicker technical support.

If you're not familiar with docker and its causing you problems, then you really should be. It's easy - install Docker or Docker Desktop and the `Makefile` will show you how to use it. I don't expect any tech-support calls based on your inability to use docker or to get docker working -- knowing how to do at least this is ground-level stuff these days.

### Comprehension
If any of this doesn't make a lot of sense to you then sorry, you're probably not the sort of person we are looking for. You have fallen at the first hurdle and failed the test. Thanks for taking the time to apply and good luck in your next role. We are hiring contractors, not permies, and learning on the job is not an option for us -- you must already be up to speed.

### Submission
Just send us your github repo name. BitBucket is an instant fail, it must be github and it must be a public project.