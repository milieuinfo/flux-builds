"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[3518],{"./libs/elements/src/video-player/stories/vl-video-player.stories.ts":(e,o,t)=>{t.r(o),t.d(o,{default:()=>i,videoPlayerDefault:()=>s});var r=t("./node_modules/lit-html/lit-html.js");t("./libs/elements/src/video-player/vl-video-player.element.ts");let i={title:"Elements/video-player",tags:["autodocs"],parameters:{controls:{hideNoControlsWarning:!0}}},s=()=>(0,r.dy)` <div style="max-width: 780px">
    <video
        is="vl-video-player"
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"
        controls
        crossorigin
        playsinline
        data-cy="video-player"
    >
        <!-- Video files -->
        <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
            type="video/mp4"
            size="576"
        />
        <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
            type="video/mp4"
            size="720"
        />
        <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            type="video/mp4"
            size="1080"
        />
        <!-- Text track file -->
        <track
            kind="captions"
            label="English"
            srclang="en"
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
            default=""
        />
        <!-- Fallback for browsers that don't support the <video> element -->
        <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" download=""> Download </a>
    </video>
</div>`;s.storyName="vl-video-player - default",s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'() => html` <div style="max-width: 780px">\n    <video\n        is="vl-video-player"\n        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"\n        controls\n        crossorigin\n        playsinline\n        data-cy="video-player"\n    >\n        <!-- Video files -->\n        <source\n            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"\n            type="video/mp4"\n            size="576"\n        />\n        <source\n            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"\n            type="video/mp4"\n            size="720"\n        />\n        <source\n            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"\n            type="video/mp4"\n            size="1080"\n        />\n        <!-- Text track file -->\n        <track\n            kind="captions"\n            label="English"\n            srclang="en"\n            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"\n            default=""\n        />\n        <!-- Fallback for browsers that don\'t support the <video> element -->\n        <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4" download=""> Download </a>\n    </video>\n</div>`',...s.parameters?.docs?.source}}}}}]);