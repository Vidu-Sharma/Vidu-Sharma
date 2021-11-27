<section {{ $attributes->merge(['class' => 'py-3']) }}>
    <div class="container">
        <div class="row">
            @if($contentHasMedia())
                <div class="col-12 mb-2">
                    <x-website.partials.page-media-block :item="$article"/>
                </div>
            @endif
            <div class="col-12">
                <x-website.partials.page-title>
                    {{ $article->title }}
                    @if($article->subtitle)
                        <x-slot name="subtitle">{{ $article->subtitle }}</x-slot>
                    @endif
                </x-website.partials.page-title>
                {!! HtmlHelper::content_part($article->description,1) !!}
                @foreach(HtmlHelper::content_part_looper($article->description) as $part)
                    {!! $part !!}
                @endforeach
                <x-website.partials.page-doc :doc="$article->doc"/>
            </div>
        </div>
    </div>
</section>
